import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const url = "http://localhost:3000/";

const stockprice = ()=>{
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios.get(url)
        .then(res => setData(res))
        .catch(err => console.error(err));
    },[]);

    return(
        <div>
            <h1>Stock Prices</h1>
        </div>
    )

}

export default stockprice;
