import axios from "axios";
import Axios from "./Axios";
import { useNavigate } from "react-router-dom";

// Axios 인스턴스 생성
const Interceptor = axios.create({
  baseURL: Axios.KH_DOMAIN, // Axios의 KH_DOMAIN을 baseURL로 설정
});

// 응답 Interceptor 추가
Interceptor.interceptors.response.use(
  // 응답이 성공적일 때의 처리
  (response) => response,

  // 응답이 실패했을 때의 처리
  async (error) => {
    const originalRequest = error.config;

    // 만약 응답이 401 Unauthorized이고, 해당 요청이 재시도되지 않았을 경우
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // 저장된 refresh token을 가져옴
      const refreshToken = localStorage.getItem("refreshToken");

      // refresh token이 존재하고, null이 아닌 경우
      if (refreshToken && refreshToken !== null) {
        // Axios.handleUnauthorized() 함수를 사용하여 새로운 access token을 얻음
        const newAccessToken = await Axios.handleUnauthorized();

        // 새로 받은 access token이 존재하는 경우
        if (newAccessToken) {
          // 새로 얻은 access token을 저장
          localStorage.setItem("accessToken", newAccessToken);

          // 기존 요청의 헤더에 새로운 access token을 추가
          Interceptor.defaults.headers.common["Authorization"] =
            "Bearer " + newAccessToken;

          // 기존 요청을 다시 보냄
          return Interceptor(originalRequest);
        } else {
          // 리프레시 토큰이 만료된 경우
          alert("토큰이 만료되었습니다.");

          // "/" 경로로 이동
          window.location.href = "/";

          // 또는 React Router의 useNavigate 훅을 사용하여 이동
          useNavigate("/");
        }
      }
    }

    // 위 조건에 해당하지 않는 경우 에러를 거부함
    return Promise.reject(error);
  }
);

export default Interceptor;
