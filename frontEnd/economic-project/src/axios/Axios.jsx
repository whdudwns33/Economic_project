import axios from "axios";
import Interceptor from '../axios/Interceptor';


const KH_DOMAIN = "http://localhost:8111";

const Axios = {
  // 회원 가입
  signUp: async (email, password, name, gender) => {
    const signUpData = {
      email: email,
      password: password,
      name: name,
      gender: gender,
    };
    return await axios.post(KH_DOMAIN + "/auth/sign", signUpData);
  },
  // 로그인
  logIn: async (email, password) => {
    const logInData = {
      email: email,
      password: password,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", logInData);
  },
  // 주식 정보 get
  dataTop: async () => {
    return await axios.get(`${KH_DOMAIN}/stock/topList`);
  },
  // 결재 내역 저장
  saveAmount : async (email, amount) => {
    const accessToken = window.localStorage.getItem("accessToken");
    const saveAmountData = {
      email : email,
      amount : amount,
    }
    return await Interceptor.post(`${KH_DOMAIN}/member/amount`, saveAmountData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },

  
  
};

export default Axios;
