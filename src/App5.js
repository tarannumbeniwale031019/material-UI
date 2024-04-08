import React, { useState } from 'react'
//add course and all student details//
const App5 = () => {
  let [data,setData]=useState({"name":"","email":"","phno":"","deadline":"","marks":"","dept":""})
  let [task,setTask]=useState([])
  let [f,setF]=useState(true)
  let [cf,setCf]=useState(false)
  let [ind,setInd]=useState()
  let [course,setCourse]=useState([])
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setTask([...task,data])
    setData({"name":"","email":"","phno":"","deadline":"","marks":"","dept":""})
  }
  let del=(i)=>{
    task.splice(i,1)
    setTask([...task])
  }
  let update=()=>{
    if(cf)
    {
      course[ind]=data
      setCourse([...course])
      setF(true)
      setCf(false)
      setData({"name":"","email":"","phno":"","deadline":"","marks":"","dept":""})
   
    }
    else
    {
      task[ind]=data
      setTask([...task])
      setF(true)
      setData({"name":"","email":"","phno":"","deadline":"","marks":"","dept":""})
   
    }
      
  }
  let edit=(i)=>{
    setData(task[i])
    setF(false)
    setInd(i)
  }
  let adduser=(i)=>{
    setCourse([...course,task[i]])
    task.splice(i,1)
    setTask([...task])


  }
  let editcourse=(i)=>{
    setData(course[i])
    setF(false)
    setCf(true)
    setInd(i)
  }
  
  return (
    <div>
      <div className='form'>
        <input type='text' value={data.name} name="name" onChange={fun} placeholder='enter name'/>
        <input type='text' value={data.email} name="email" onChange={fun} placeholder='enter email'/>
        <input type='text' value={data.phno} name="phno" onChange={fun} placeholder='enter phno'/>
      {!cf && <input type='date' value={data.deadline} name="deadline" onChange={fun}/>}
        <input type='text' value={data.marks} name="marks" onChange={fun}/>
        <select onChange={fun} name="dept">
        {data.dept==""?  <option selected disabled>select dept</option>:<option disabled>select dept</option>}
        {data.dept=='cse'? <option value="cse" selected>Computers</option> :<option value="cse">Computers</option>}
        {data.dept=='ece'? <option value="ece" selected>electrical</option> :<option value="ece">electrical</option>}
        {data.dept=='eee'? <option value="eee" selected>elctronics</option>: <option value="eee">elctronics</option>}
        </select>
      {f&&<button onClick={add}> Add Task</button>}
       {!f&&<button onClick={update}> updateTask</button>}


      </div>
      {
        task.length!=0&&<table className='tbl'>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phno</th>
            <th>deadline</th>
            <th>marks</th>
            <th>dept</th>
          </tr>
          {
            task.map((item,i)=>{
              return(
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phno}</td>
                  <td>{item.deadline}</td>
                  <td>{item.marks}</td>
                  <td>{item.dept}</td>
                  <td><button onClick={()=>edit(i)}>edit</button></td>
                  <td><button onClick={()=>del(i)}>delete</button></td>
                  <td><button onClick={()=>adduser(i)}>addtocourse</button></td>
                </tr>
              )
            })
          }
        </table>

      }
      {
         course.length!=0&&<table className='tbl'>
         <tr>
           <th>name</th>
           <th>email</th>
           <th>phno</th>
    
           <th>marks</th>
           <th>dept</th>
         </tr>
         {
           course.map((item,i)=>{
             return(
               <tr key={i}>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td>{item.phno}</td>
               
                 <td>{item.marks}</td>
                 <td>{item.dept}</td>
             <td><button onClick={()=>editcourse(i)}>edit</button></td>
                </tr>
             )
           })
         }
       </table>
      }
    </div>
  )}
export default App5