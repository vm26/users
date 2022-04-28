import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home=(params)=>{  
    const [users,setusers]=useState([]);
    useEffect(()=>{
        setusers(params.data);
    })
    
   const delUser=(id)=>{
    users.forEach(element => {
        if(element.id==id){
         var index= users.indexOf(element);               
         let user=users.splice(index,1);
         setusers(user);
        
         
   }
})
   }
    return(
        <div className='h-screen bg-violet-200'>
            <h1 className='text-red-500 font-bold text-2xl text-center pt-3'>Users List</h1>
<div className='p-10'>
            {
               users.map((item)=>{
                    return(
                    <div key={item.id} className='m-3 p-3'>
                        <span className='text-lg inline-block w-48 mr-5 '>
                        <p className='mb-2'>{item.username}</p>
                        <p>{item.email}</p>
                        </span>
                        <span>
                        <Link to={`/profile/${item.id}`}><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3'>Show Profile</button></Link>
                        <Link to={`/edit-user/${item.id}`}><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3' >Edit</button></Link>
                       <button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3' onClick={()=>{delUser(item.id)}}>Delete</button>
                       </span>
                    </div>
                    )
                })
            }
            <Link to="/create-user"><button className='rounded bg-red-500 hover:bg-red-700 text-white p-3 m-3'>Create User</button></Link>
            <Link to="/"><button className='rounded bg-red-500 hover:bg-red-700 text-white p-3 m-3'>Back</button></Link>
        </div>
        </div>
        
    )
}
export default Home;