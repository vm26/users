import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal'

const Create=(params)=>{
    const[showModal,setShowModal]=useState(true)   
    const [formData,setFormData]=useState();
  const navigate=useNavigate();
    
   
    const onInputChange = (e) => {
        setFormData(oldvalue => {
            return {
                ...oldvalue,
                [e.target.name]: e.target.value
            }
        })

    }   
    
    
    const createuser=()=>{
        if(formData.name){
        params.data.push({
            id:formData.id,
            name:formData.name,
            username:formData.uname,
            address:formData.address,
            street:formData.street,
            email:formData.email,
            phone:formData.phone
        }) 
        setShowModal(false);                        
        navigate('/users');
            
    }
}
   
return (
    <div>
        <Modal title= "Create User" open={showModal}>
        <div>
            <form>
            <label>Enter Id:</label><br></br>
            <input className='mt-3 mb-3' type='text'  name='id' placeholder='Enter id' onChange={onInputChange} required></input><br></br>
            <label>Enter name:</label><br></br>
            <input className='mt-3 mb-3' type='text'  name='name' placeholder='Enter name' onChange={onInputChange} required></input><br></br>
            <label>Enter Username:</label><br></br>
            <input  className='mt-3 mb-3' type='text' name='uname' placeholder='Enter user name' onChange={onInputChange}></input><br></br>
            <label>Enter email:</label><br></br>
            <input  className='mt-3 mb-3' type='text' name='email' placeholder='Enter email' onChange={onInputChange} required></input><br></br>
            <label>Enter address:</label><br></br>
            <input  className='mt-3 mb-3' type='text' name='address' placeholder='Enter address' onChange={onInputChange}></input><br></br>            
            <label>Enter phone:</label><br></br>
            <input  className='mt-3 mb-3' type='text' name='phone' placeholder='Enter phone' onChange={onInputChange} required></input><br></br>
            </form>
             <button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3' onClick={()=>{createuser();}}>Create</button>
            
             <Link to='/users'><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3 '>Close</button></Link>
          
        </div>
        </Modal>
       
    </div>
)
}
export default Create;