import { useState } from "react";
import Axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const userNavigator = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onClickEmail = (e) => {
    setEmail(e.target.value);
  };
  const onClickPassword = (e) => {
    setPassword(e.target.value);
  };

  const OnClickLogin = async () => {
    try {
      const res = await Axios.logIn(email, password);
      console.log("로그인 : ", res.data);
      console.log(res.data);
      if (res.data.grantType === "Bearer") {
        console.log("accessToken : ", res.data.accessToken);
        console.log("refreshToken : ", res.data.refreshToken);
        window.localStorage.setItem("accessToken", res.data.accessToken);
        window.localStorage.setItem("refreshToken", res.data.refreshToken);
        alert("로그인 성공");
        userNavigator("/stock");
      } else {
        alert("아이디 및 패스워드를 재확인해 주세요.^^");
      }
    } catch (err) {
      console.log(err);
      alert("아이디 및 패스워드를 재확인해 주세요.^^");
    }
  };

  return (
    <>
      <input type="text" onClick={onClickEmail} />
      {email}
      <input type="text" onClick={onClickPassword} />
      {password}
      <button onClick={OnClickLogin}>로그인</button>
    </>
  );
};

export default LoginComponent;
