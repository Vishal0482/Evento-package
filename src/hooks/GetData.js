import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../config";

const GetData = (apiEndPoint) => {

    const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
    const header = {
        'Authorization': `Token ${token}`
    };

    const [data, setData] = useState([]);
    // console.log(data);
    const getApiData = async() => {
        try {
            const response = await axios.get(`${baseUrl}/api/${apiEndPoint}`,{headers: header});
            // console.log(`${apiEndPoint}`,response);
            setData(response.data.data);
    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getApiData();
    },[]);

    return data;
}

export default GetData;