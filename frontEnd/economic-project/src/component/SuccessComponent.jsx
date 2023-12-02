import { useLocation } from 'react-router-dom';
import Axios from "../axios/Axios";

export const SuccessComponent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amount = queryParams.get("amount");
    console.log("데이터 베이스에 저장될 가격 정보 : ", amount);
    const paymentKey = queryParams.get("paymentKey");
    const paymentType = queryParams.get("paymentType");
    const orderId = queryParams.get("orderId");
    // 임시 이메일 정보
    const email = "asd123@naver.com"


    const onClickSuccess = async () => {
        try {
            const res = await Axios.saveAmount(email, amount);
            console.log("금액 충전 : " + res.data);
    
            if (res.data === true) {
                alert("결제 성공");
            } else {
                alert("결제 실패");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <p>결제 완료</p>
            <p>결제 내역: {amount}</p>
            <button onClick={onClickSuccess} >결제 확인</button>

        </>
    );

};

