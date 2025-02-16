import React from 'react'
import { useState, useCallback, useRef,useEffect } from 'react';

function PassGen() {
    
    let [length,setLength] = useState(8);
    let [password,setPassword] = useState("defPass");
    const passref =useRef(password);
    function copyToClipBoard(){
      window.navigator.clipboard.writeText(password)
      passref.current?.select()
  
    }
    const passGenrator = useCallback(()=>{
        let pass="";
        let str="asdfghjklzxvcbnmqwertyuiop1234567890`?/}{_><.,+)(*&^%$#@!"
        for (let i = 0; i < length; i++) {
          pass+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(pass);
      }
      ,[length])

    useEffect(passGenrator,[length])

  return (<div className='min-h-screen'>
    <input 
    type="range"
    value={length}
    min={1}
    max={50}
    onChange={(e)=>{
      setLength(e.target.value)
    }} />
    <label className='text-2xl pl-3'>{length}</label>
    <div><input 
    type='text' 
    value={password} 
    ref = {passref} 
    className='border-none
    outline-none
     w-full' /> <br/>
      <div className='flex mb-10 justify-center gap-30'>
        <button className="text-xl mt-8 gap-y-px" onClick={copyToClipBoard}>
        copy
         </button>
          <button className='text-xl mt-8'onClick={passGenrator}> New</button>
        </div>
      </div>
    </div>
  )
}

export default PassGen