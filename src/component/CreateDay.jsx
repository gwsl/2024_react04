import React from 'react';
import useFetch from '../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateDay(props) {
    const days = useFetch("http://localhost:3010/days")
    const history = useNavigate();
    async function addDay(params) {
        try {
            const response = await axios.post(`http://localhost:3010/days`,{
                day : (Array.isArray(days) ? days.length : 0 ) + 1
            });
            if(response.status === 201){ // 리소스 생성 성공(POST)
                alert("생성 완료");
                history('/')
            }
        } catch (error) {
            console.log("Error 발생 : ", error)
        }


    }
    return (
        <div>
            <h3>현재 일수 : {days && days.length}일</h3>
            <button onClick={addDay}>day 추가</button>
        </div>
    );
}

export default CreateDay;