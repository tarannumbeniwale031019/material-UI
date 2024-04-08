import'./App.css'
import axios from "axios"
import React ,{useEffect,useState} from 'react'
//Render Api in card form
const  App4= () => {
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then
        ((res)=>{
            setData(res.data.products)
            console.log(res.data.products)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div className='con'>
        
  
    {
        data.map((item)=>{
            return(
                <div className="card">
                <div className="img"><img src={item.images[0]}/></div>
                <h2>Id: {item.id}</h2>
                <h3>Title: {item.title}</h3>
                <h3>Price: {item.price}</h3>
                <p>Rating: {item.rating}</p>
                <p>Brand: {item.brand}</p>
                <p>category: {item.category}</p>
                <p>Description: {item.description}</p>
                

            </div>
            )
        })
       }
    </div>
  )
}

export default App4