import axios from "axios";

const KH_DOMAIN = "http://localhost:8111";



const Axios = {
    dataTop : async function(allData) {
        return await axios.get(`${KH_DOMAIN}/stock/topList/${allData}`);
    }
}



export default Axios;