import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data,setData] = useState([])
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log("Error", error);
            }
        };
        

    //     fetch(url)
    //     .then(res =>{
    //         return res.json()
    //     })
    //     .then(data =>{
    //         setData(data);
    //     })
    //     .catch((error) => console.log("Error", error));
        fetchData();
    },[url]);
    return data;
}

export default useFetch;