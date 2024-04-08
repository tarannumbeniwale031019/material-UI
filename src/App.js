import React, { useState } from 'react'

let App = () => {
  let[data,setData]=useState([])
  let[task,setTask]=useState("")
  let fun=(e)=>{
    setTask(e.target.value)
  }
  let add=()=>{
  setData([...data,task])
  setTask("")
}
  return (
    <div>
      <input type='text' placeholder='enter data' onChange={fun} value={task}/>
      <button onClick={add}>Add</button>
      <div>
        {
        data.map((item)=><li>{item}</li>)
        }
      </div>
    </div>

  )

      }
export default App
