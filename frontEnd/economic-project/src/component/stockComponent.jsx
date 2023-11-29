import { useState, useEffect } from "react";
import Axios from "../axios/Axios";

const StockComponent = () => {
    const [list, setList] = useState([])


    useEffect(() => {
        const allData = "allData";
        const topDataList = async() => {
        try {
            const response = await Axios.dataTop(allData);
            console.log(response.data);
            setList(response.data)
        }
        catch (error) {
            console.log("응답이 없습니다.", error);
        }
    };
    topDataList();
    }, []);

    return (
        <>
        {list.map((data, index)=> (
            <div key={index}>
                <p>{index}</p>
                <p>name: {data.name}</p>
                <p>price: {data.price}</p>
                <p>upDown: {data.upDown}</p>
                <p>rate: {data.rate}</p>
                <br/>
            </div>

        ))}
        </>
    )

}


export default StockComponent;