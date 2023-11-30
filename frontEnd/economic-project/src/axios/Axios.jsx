import axios from "axios";

const KH_DOMAIN = "http://localhost:8111";

const Axios = {
  signUp: async function (email, password, name, gender) {
    const signUpData = {
      email: email,
      password: password,
      name: name,
      gender: gender,
    };
    return await axios.post(KH_DOMAIN + "/auth/sign", signUpData);
  },

  logIn: async function (email, password) {
    const logInData = {
      email: email,
      password: password,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", logInData);
  },
  // 주식 정보 get
  dataTop: async function () {
    return await axios.get(`${KH_DOMAIN}/stock/topList`);
  },
};

export default Axios;
