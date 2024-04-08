import React from "react"
import { useState } from "react"

const App2 = () => {
  let[data,setData]=useState([])
let[obj,setObj]=useState({"uid":"", "email":"", "task":"", "dl":""})
let[f,setF]=useState(true)
let[ind,setInd]=useState(-1)
let fun=(e)=>{
  setObj({...obj,[e.target.name]:e.target.value})
}
let add=()=>{
  setData([...data,obj])
  setObj({"uid":"", "emai":"", "task":"", "dl":""})
}
let del=(i)=>{
data.splice(i,1)
setData([...data])
}
let edit=(i)=>{
  setObj(data[i])
  setF(false)
  setInd(i)
}
let update=()=>{
  data[ind]=obj
  setData([...data])
  setF(true)
  setObj({"uid":"", "email":"", "task":"", "dl":""})
}
  return(
    <div>
      <input type="text" placeholder="enter user id" name="uid" value={obj.uid} onChange={fun}/>
      <input type="text" placeholder="enter email" name="email" value={obj.email} onChange={fun}/>
      <input type="text" placeholder="enter task" name="task" value={obj.task} onChange={fun}/>
      <input type="date" placeholder="enter deadline" name="dl" value={obj.dl} onChange={fun}/>
      {f&&<button onClick={add}>Add</button>}
      {!f&&<button onClick={update}>Update</button>}
      {data.length>0 && <table border={1}>
      <tr><th>Uid</th><th>Email</th><th>Task</th><th>deadline</th></tr>
  {
        data.map((item,i)=>{
        return(<tr>
            <td>{item.uid}</td>
            <td>{item.email}</td>
            <td>{item.task}</td>
            <td>{item.dl}</td>
            <td><button onClick={()=>edit(i)}>Edit</button></td>
            <td><button onClick={()=>del(i)}>delete</button></td>
        </tr>)


        })
      }
      </table>
}
</div>
  )
}
export default App2
