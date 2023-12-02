import { useState, useEffect } from "react";
import Axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";


const StockComponent = () => {
  const [list, setList] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
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


  // 10분 마다 정보를 요청은 하지만 새롭게 반영은 되지 않음.
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

  const onClickPay = (name,Price) => {
    setSelectedName(name);
    setSelectedPrice(Price);
    navigate(`/check?name=${name}&&Price=${Price}`);
  };

  return (
    <>
      {list.map((data, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>name: {data.name}</p>
          <p onClick={() => onClickPay(data.name ,data.price)}>price: {data.price}</p>
          <p>upDown: {data.upDown}</p>
          <p>rate: {data.rate}</p>
          <br />
        </div>
      ))}
      <button onClick={() => onClickPay()}>구매</button>
    </>
  );
};

export default StockComponent;
