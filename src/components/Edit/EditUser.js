import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Modal from '../Modal/Modal'
import { Link ,useParams} from 'react-router-dom'

const Edit=(props)=>{
    const paramid=useParams();   
    useEffect(()=>{
       props.data.forEach(element => {
           if(element.id==paramid.id){                  
            setdatas(element);
           }
       })       
       
   },[]);
    
    
    const[showModal,setShowModal]=useState(true) 
    const[datas,setdatas]=useState({})

   
    const onInputChange = (e) => {
        setdatas(oldvalue => {
            return {
                ...oldvalue,
                [e.target.name]: e.target.value
            }
        })

    }   
    
    
    
    const Edituser=()=>{
        if(datas.name){
           props.data.forEach(ele=>{
               if(ele.id==paramid.id)             
              {
                var index= props.data.indexOf(ele);               
                props.data.splice(index,1,{
                id:datas.id,
                name:datas.name,
                username:datas.username,
                address:datas.address,              
                email:datas.email,
                phone:datas.phone
               }); 
               }
           })
           
          
                                
                setShowModal(false);
              
           
            }
    }
return (
    <div>
        <Modal title= "Edit User" open={showModal}>
        <div>
            <form>
            <label>Enter name:</label><br></br>
            <input className='mt-3 mb-3' type='text'  value={datas.name} name='name' placeholder='Enter name' onChange={onInputChange} required></input><br></br>
            <label>Enter Username:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={datas.username} name='username' placeholder='Enter user name' onChange={onInputChange}></input><br></br>
            <label>Enter email:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={datas.email} name='email'  placeholder='Enter email' onChange={onInputChange} required></input><br></br>
            <label>Enter address:</label><br></br>
            <input className='mt-3 mb-3' type='text'  value={datas.address} name='address'   placeholder='Enter address' onChange={onInputChange}></input><br></br>            
            <label>Enter phone:</label><br></br>
            <input className='mt-3 mb-3' type='text' value={datas.phone} name='phone' placeholder='Enter phone' onChange={onInputChange} required></input><br></br>
           
            <Link to='/users'> <button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3' onClick={Edituser}>Edit</button></Link>
                 
           
                  <Link to='/users'><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-3'>Close</button></Link>
           </form>
        </div>
        </Modal>
       
    </div>
)
}
export default Edit;