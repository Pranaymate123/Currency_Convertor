import React, { useId } from "react";

import './Style.css' ;
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChnage,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  className=""



}) {
  const amountInputId=useId();
  return (
    <>

   
     
        <div className={` box top m-auto flex justify-around ${className} `} >
          <div className="left flex flex-col w-60 gap-5">
            <label>{label}</label>
            <input
            id={amountInputId}
             type="Number"
              placeholder="Enter the amount" 
              className="px-2 py-1 rounded-lg outline-none"
              value={amount}
              onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
              disabled={amountDisable}


              /> 
          </div>
          <div className="right flex flex-col gap-6">
            <p>Currency Type</p>
            <select
            value={selectCurrency}
            onChange={(e)=> onCurrencyChnage && onCurrencyChnage(e.target.value)}
            disabled={currencyDisable}
            >
              {currencyOptions.map((Currency)=>(
              <option key={Currency} value={Currency}>{Currency}</option>))}
            </select>
          </div>
        </div>
        {/* <div className="box bootom m-auto flex justify-around">
          <div className="left flex flex-col w-60 gap-5">
          <label>To</label>
            <input type="Number" placeholder="Enter the amount" className="px-2 py-1 rounded-lg outline-none"/> 
          </div>
          <div className="right flex flex-col gap-6">
            <p>Currency Type</p>
            <select>
              <option value="">Usd</option>
            </select>
          </div>
        </div> */}
     
      
    </>
  );
}

export default InputBox;
