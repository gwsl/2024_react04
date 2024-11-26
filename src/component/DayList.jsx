import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
// import dummy from "../db/data.json"

function DayList(props) {
   

    const days = useFetch('http://localhost:3010/days');

    return (
        <ul className="list_day">
            {days.map(k=>{
                return <li key={k.id}>
                    <Link to={`/day/${k.day}`}> Day {k.day}</Link>
                    </li>
            })}
        </ul>
    );
}

export default DayList;