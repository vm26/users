import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Modal from '../Modal/Modal'
import { Link ,useParams} from 'react-router-dom'

const EditProfile=(props)=>{
    useEffect(()=>{
        props.data.forEach(element => {
            if(element.id==para.id){                  
             setdata(element);
            }
        }) 
    },[]);
    
    const para=useParams();
    const[showModal,setShowModal]=useState(true) 
    const[data,setdata]=useState({})

   
    const onInputChange = (e) => {
        setdata(oldvalue => {
            return {
                ...oldvalue,
                [e.target.name]: e.target.value
            }
        })

    }   
    
    
    
    const EditProfile=()=>{
        if(data.name){
            props.data.forEach(ele=>{
                if(ele.id==para.id)             
               {
                 var index= props.data.indexOf(ele);               
                 props.data.splice(index,1,{
                 id:data.id,
                 name:data.name,
                 username:data.username,
                 address:data.address,              
                 email:data.email,
                 phone:data.phone
                }); 
                }
            })
            
           
                                 
                 setShowModal(false);
               
            
             }
    }
return (
    <div>
        <Modal title= "Edit Profile" open={showModal}>
        <div>
            <form>
            <label>Enter name:</label><br></br>
            <input className='mt-3 mb-3' type='text'  value={data.name} name='name' placeholder='Enter name' onChange={onInputChange} required></input><br></br>
            <label>Enter Username:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={data.username} name='username' placeholder='Enter user name' onChange={onInputChange}></input><br></br>
            <label>Enter email:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={data.email} name='email'  placeholder='Enter email' onChange={onInputChange} required></input><br></br>
            <label>Enter address:</label><br></br>
            <input className='mt-3 mb-3' type='text'  value={data.address} name='address'   placeholder='Enter address' onChange={onInputChange}></input><br></br>            
            <label>Enter phone:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={data.phone} name='phone' placeholder='Enter phone' onChange={onInputChange} required></input><br></br>
           
            <Link to='/users'> <button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3' onClick={()=>EditProfile()}>Edit</button></Link>
            <Link to='/users'><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3'>Close</button></Link>
           </form>
        </div>
        </Modal>
       
    </div>
)
}
export default EditProfile;