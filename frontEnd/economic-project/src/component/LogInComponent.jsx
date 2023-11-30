import { useState } from "react";
import Axios from "../axios/Axios";

const LoginComponent = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const onClickEmail = (e) => {
    setEmail(e.target.value);
  };
  const onClickPassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickName = (e) => {
    setName(e.target.value);
  };
  const onClickGender = (e) => {
    setGender(e.target.value);
  };

  const onClickSignUp = async () => {
    const memberReg = await Axios.signUp(email, password, name, gender);
    console.log(memberReg.data);
    if (memberReg.data.email === email) {
      alert("회원가입에 성공했습니다.");
    } else {
      alert("회원 가입에 실패 했습니다.");
    }
  };

  return (
    <>
      <input type="text" onClick={onClickEmail} placeholder="이메일" />
      <p>{email}</p>
      <input type="text" onClick={onClickPassword} placeholder="패스워드" />
      <input type="text" onClick={onClickName} placeholder="이름" />
      <input type="text" onClick={onClickGender} placeholder="성별" />

      <button onClick={onClickSignUp}>회원 가입</button>
    </>
  );
};

export default LoginComponent;
