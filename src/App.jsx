import { useState } from 'react'
import useCurrencyInfo from './useCurrencyInfo'
import InputBox from './Components/InputBox'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [convertedAmount,setconvertedAmount]=useState();
  //custom hooks used to get the data
  const currencyInfo=useCurrencyInfo(from);

  const options=Object.keys(currencyInfo);
  console.log(options)

  function convert(){
    setconvertedAmount(amount * currencyInfo[to])
  } 
  const swap=()=>
  {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }
    return (
    <>
    
    <div className='MainContainer'>
    <div className="heading">
      <h1>Currency Convertor</h1>
    </div>
      <div className="container flex">
      <div className='Left'>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-caddo-chai-in-a-cup-with-cinnamon-and-spices-image_2943042.jpg" />
      </div>
    <div className='Right '>
        <div className='py-4 '>
        <form  className=' flex flex-col gap-4'
        onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}>
          
          <div>
            <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount)=>setAmount(amount)}
            onCurrencyChnage={(currency)=>setFrom(currency)}
            selectCurrency={from}
            />
          </div>
          <div className='flex justify-center'>
            <button 
            onClick={swap}
            className='swap-btn border-2 px-2 py-1 '>
              Swap
            </button>
          </div>
          <div>
            <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChnage={(currency)=>setTo(currency)}
            selectCurrency={to}
            amountDisable
            />
          </div>
          <div className=' flex justify-center'>
          <button
          
          type='submit'
          className='convert-btn border-2 w-14'>Convert {from} to {to}
          
          </button>
          </div>
        </form>
        </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default App
