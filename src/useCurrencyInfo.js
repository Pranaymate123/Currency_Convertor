import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    let [data,setData]=useState({});
    useEffect(()=>{
        console.log("hello")
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]));
        // console.log(data);
    },[currency])   
    // console.log(data);
    return data;
}
export default useCurrencyInfo;