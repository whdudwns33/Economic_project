import requests
import schedule
from bs4 import BeautifulSoup
import json
import time

def perform_web_crawling():
    # 데이터 크롤링
    url = "https://finance.naver.com/"
    response = requests.get(url)
    bs_obj = BeautifulSoup(response.text, "html.parser")
    div_class = bs_obj.find("table" , {"class" : "tbl_home"})
    top_tbody = div_class.find("tbody", {"id" : "_topItems1"} )
    # tr 태그를 찾음. 리스트로 저장
    tr_tags = top_tbody.find_all("tr")
    # print(tr_tags)
    print("-------------------------------------------------------------------------------------------")

    data_list = []
    # 리스트로 저장된 tr을 순회하는 향상된 for문으로 th 정보를 찾음
    for tr in tr_tags:
        th_text = tr.find("th", {"scope" : "row"}).text.strip()
        td_price = tr.find("td").text.strip()
        td_ud = tr.em.text.strip()
        # bu_p 의 태그 뒤에 나오는 em이 %를 표시하는 태그이므로 find_next 사용
        td_rate = tr.select_one('td em[class^="bu_p"]').find_next('em').text.strip()
        print(th_text)
        print(td_price)
        print(td_ud)
        print(td_rate)

        data_dict = {"name" : th_text, "price" : td_price, "upDown" : td_ud, "rate" : td_rate}
        data_list.append(data_dict)


    print("-------------------------------------------------------------------------------------------")

    # 저장 내역 확인
    # for data in data_list:
    #     print(data)

    print("-------------------------------------------------------------------------------------------")


    # 데이터 전송 -> 스프링 부트
    sp_url = "http://localhost:8111/stock/save"
    headers = {"Content-Type": "application/json"}
    res = requests.post(sp_url, data = json.dumps(data_list), headers= headers)

    # 응답 확인
    if res.status_code == 200:
        print('데이터 전송 성공')
    else:
        print('데이터 전송 실패')


# 1분에 한 번씩 크롤링 작업 수행
schedule.every(15).minutes.do(perform_web_crawling)

while True:
    schedule.run_pending()
    time.sleep(1)




