import axios from "axios";
import Axios from "./Axios";


export const Common = {

    // 새로운 토큰 발행
  handleUnauthorized: async () => {
    const refreshToken = window.localStorage.getItem("refreshToken");
    const accessToken = window.localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${Axios.KH_DOMAIN}/auth/refresh`,
        refreshToken,
        config
      );
      console.log("auth/refresh : ", res.data);
      window.localStorage.setItem("accessToken", res.data.accessToken);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },


}