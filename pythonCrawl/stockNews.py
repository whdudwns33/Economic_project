import requests
from bs4 import BeautifulSoup
import json

url = "https://finance.naver.com/news/"
response = requests.get(url)
bs_obj = BeautifulSoup(response.text, "html.parser")
div = bs_obj.find("div", {"class" : "main_summary"})
summary_block = div.find_all("div", {"class" : "summary_block"})
news_list = []

for div in summary_block :
    summary_title = div.p.text
    summary_link = div.find("a").get("href")
    news_list.append({"newsTitle" : summary_title, "newsLink" : summary_link})

print(news_list)


