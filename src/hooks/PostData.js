import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../config";


const PostData = (apiEndPoint, requestBody) => {

    const token = '14e2a7b580fd9ced0489754afb2af833c0050c0f';
	const header = {
        'Authorization': `Token ${token}`
	};

    const [data, setData] = useState([]);

	const postApiData = async() => {
		try {
			const response = await axios.post(`${baseUrl}/api/${apiEndPoint}`,requestBody,{headers: header});
			console.log(`${apiEndPoint}`, response);
			setData(response.data.data);
		} catch (error) {
			console.log(error);
		};
	};

    useEffect(() => {
        postApiData();
    },[]);

    return { data }
}

export default PostData;