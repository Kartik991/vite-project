import React, { useState } from 'react'
import { useEffect } from 'react'

function ToDo() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos]=useState([])
  function addTodo(e){
    e.preventDefault()
    if(todo){
      setTodos(
      [{
        message : todo ,
        id:Date.now(),
        completed:false
      },...todos])
    }
    setTodo("")
  }
  function removeTodo(id){
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  function completed(id){
    setTodos(todos.map((todo)=>todo.id==id? {...todo,completed:!todo.completed}: todo))
  }
  function editTodo(id,e){
    setTodos(todos.map((todo)=>todo.id==id? {...todo,message:e.target.value}: todo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  
  return (
  <div className="min-h-screen p-4" >
    <form className="text-2xl p-2  m-5 ml-50 mr-50 border-2 rounded-br-full rounded-tl-full" onSubmit={addTodo}>
      <input className="border-dashed-1 rounded outline-0 ml-8 mr-8 w-200" maxLength="50" type="text" value={todo} onChange={(e)=>{e.preventDefault;setTodo(e.target.value);}}/>
      <button type='submit' >add</button>
    </form>


    
    {todos.map((todo)=>(
      <div key={todo.id} className=' text-2xl p-2 border-2  m-5 ml-50 mr-50 rounded-br-full rounded-tl-full'>
        <input className="scale-150 " checked={todo.completed} type='checkbox' onChange={()=>completed(todo.id)}/>
        <input 
        type='text'
        maxLength="50" 
        className={`ml-8 mr-8 w-200 outline-0  ${todo.completed?" line-through ":""}`} 
        Value={todo.message}
        onChange={(e)=>editTodo(todo.id,e)}
        />
        <button onClick={()=>removeTodo(todo.id)}>remove </button>
        </div>
      ))}
  </div>
  )
}

export default ToDo