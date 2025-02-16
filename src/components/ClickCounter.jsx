import { useCallback, useEffect, useRef, useState } from 'react'
import './app.css'

function ClickCounter() {

  let [count,setCount] = useState(0);
  let [isActive,setIsActive] = useState(false);
  

  function clicked(){
    if(count==0)setIsActive(true)
    setCount(count+1)
  
  }
  function reset(){
    setCount(0)
    setIsActive(false)
  }  

  let out = 
  <div className="min-h-screen">
      <h1 className = "text-5xl">
       Clicks counter 9000 <br /> 
      </h1>
      <div className="giantText">{count}</div>
      <div className="flex mb-10 justify-center gap-30">
        <>
          
          <button onClick={clicked} className='activeButton'>Click</button>
          <button className={isActive?"activeButton":"unActive"} onClick={reset} >Reset Counter</button> 
        </>
      </div>
    </div>
  return (
   out
  )
}

export default ClickCounter
