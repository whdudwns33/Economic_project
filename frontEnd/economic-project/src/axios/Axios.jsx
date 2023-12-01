import axios from "axios";

const KH_DOMAIN = "http://localhost:8111";

const Axios = {
  signUp: async (email, password, name, gender) => {
    const signUpData = {
      email: email,
      password: password,
      name: name,
      gender: gender,
    };
    return await axios.post(KH_DOMAIN + "/auth/sign", signUpData);
  },

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

  handleUnauthorized: async () => {
    const refreshToken = window.localStorage.get("refreshToken");
    const accessToken = window.localStorage.get("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${KH_DOMAIN}/auth/refresh`,
        refreshToken,
        config
      );
      console.log("auth/refresh : ", res.data);
      window.localStorage.setItem("accessToken", accessToken);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export default Axios;
