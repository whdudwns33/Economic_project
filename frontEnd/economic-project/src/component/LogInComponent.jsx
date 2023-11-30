import { useState } from "react";
import Axios from "../axios/Axios";

const LoginComponent = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onClickEmail = (e) => {
        setEmail(e.target.value);
      };
      const onClickPassword = (e) => {
        setPassword(e.target.value);
      };


    const OnClickLogin = async() => {
        const res = await Axios.logIn(email, password);
        console.log("로그인 : " , res.data)
        // if (res === )
    }

    return (
        <>
            <input type="text" onClick={onClickEmail} />
            <input type="text" onClick={onClickPassword}  />
            <button onClick={OnClickLogin} >로그인</button>
        </>
    )
}


export default LoginComponent;