import { useState, useEffect } from "react";
import Axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";
import { CheckoutPage } from "../api/Checkout";

const StockComponent = () => {
  const [list, setList] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const navigate = useNavigate();
  const topDataList = async () => {
    try {
      const response = await Axios.dataTop();
      console.log(response.data);
      setList(response.data);
    } catch (error) {
      console.log("응답이 없습니다.", error);
    }
  };

  useEffect(() => {
    topDataList();
    const interverData = setInterval(() => {
      topDataList();
      // 10분 마다 갱신
      // alert("갱신");
      console.log("새로운 요청");
    }, 600000);
    return () => clearInterval(interverData);
  }, []);

  const onClickPay = (price) => {
    setSelectedPrice(price);
    navigate("/check");
  };

  return (
    <>
      {list.map((data, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>name: {data.name}</p>
          <p onClick={() => onClickPay(data.price)}>price: {data.price}</p>
          <p>upDown: {data.upDown}</p>
          <p>rate: {data.rate}</p>
          <br />
        </div>
      ))}
      <button onClick={() => onClickPay(selectedPrice)}>구매</button>
      <CheckoutPage money={selectedPrice} />
    </>
  );
};

export default StockComponent;
