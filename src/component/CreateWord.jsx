import React, { useRef } from 'react';
import useFetch from '../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateWord(props) {
    const days = useFetch("http://localhost:3010/days");
    const history = useNavigate();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    async function onSubmit(e) {
        e.preventDefault();
        
        // 값 가져오는지 확인
        if(!dayRef.current.value || !engRef.current.value || !korRef.current.value){
            alert(`입력값이 비어 있습니다.`)
            return;
        }

        await axios.post(`http://localhost:3010/words/`,{
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value,
            isDone : false
        }).then((res)=>{
            if(res.status === 201) { // 리소스 생성 성공 (POST)
                alert("생성 완료");
                history(`/day/${dayRef.current.value}`)
            }
        }).catch((error)=>{
            console.error("Error : ", error);
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label htmlFor='engInput'>Eng</label>
                <input type='text' placeholder='computer' id="engInput" ref={engRef}/>
            </div>
            <div className='input_area'>
                <label htmlFor='korInput'>Kor</label>
                <input type='text' placeholder='컴퓨터' id="korInput" ref={korRef}/>
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days && days.map(k=>{
                        return <option key={k.id} value={k.day}>
                            {k.day}
                        </option>
                    })}
                </select>
            </div>
            <button >저장</button>
        </form>
    );
}

export default CreateWord;