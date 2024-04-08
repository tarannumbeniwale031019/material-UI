import React from 'react'

const App3 = () => {
  return (
    <div>
      <input type="text" placeholder='enter name' name='name' onChange={fun} value={obj.name}/>
      <input type="password" placeholder='enter pasword' name='pwd' onChange={fun} value={obj.pwd}/>
      <input type="email" placeholder='enter email' name='email' onChange={fun} value={obj.email}/>
      <input type="radio" value="male" onChange={fun} name="gen"/>Male
      <input type="radio" value="female" onChange={fun} name="gen"/>Female
      Branch:<select onChange={fun} name='branch'>
        <option value=""disabled Select>select any one option</option> 
        <option value="cse">Computer</option>
        <option value="ece">electronic</option>
        <option value="eee">electrical</option>
        <option value="ce">civil</option>
      </select>
      Addr:<textarea name='addr' onChange={fun} value={obj.addr}></textarea>
      DOB:<input type="date" onChange={fun} name='dob' value={obj.dob}/>
      skillsrating:<input type='range' min={1} max={10} onChange={fun} name="rating" value={obj.rating}/>
      <input type='checkbox' onChange={fun1} value="Telgu" checked={Lang.include("telgu")}/>Telgu
      <input type='checkbox' onChange={fun1} value="Hindi" checked={Lang.include("hindi")}/>hindi
      <input type='checkbox' onChange={fun1} value="English" checked={Lang.include("english")}/>English
      <button onClick={add}>Add</button>
      {
        data.length>0&&<table border={1}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
          <th>gender</th>
          <th>Branch</th>
          <th>Adress</th>
          <th>DOB</th>
          <th>Rating</th>
          <th>Lang known</th>
        </tr>
        {
          data.map((item)=>{
          return(

          
          )
          })
          
        
      

    
    </div>
  )
}

export default App3
