import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout';
import Create from './components/Create/Createuser';
import Edit from './components/Edit/EditUser'
import axios from 'axios';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Editprofile/EditProfile'
function App() {
 
 
  var userList=[
    {
      "name": "Varnisha",
      "username": "Nisha26",
      "address": "Trichy",
      "email": "nisha1@gmail.com",
      "phone": "12345",
      "id":1
    },
    {
      "name": "Kumar",
      "username": "Kumar chinnasamy",
      "address": "coimbatore",
      "email": "kumar@gmail.com",
      "phone": "12432134", 
      "id":2
    }
  ]
  
  // const DeleteUser=(id)=>{  
  //   users.forEach(element => {
  //     if(element.id==id){
  //      var index=users.indexOf(element);               
  //      users.splice(index,1);
  //       setusers(users);
  //       console.log(users)
  //       //let ls=JSON.parse(localStorage.getItem('users'));
  //       // if(users.length!=ls.length){
  //       //   localStorage.clear();
  //       //   localStorage.setItem('users',JSON.stringify(userList));
          
  //       // }
  //     }
  //   })
      
  //}
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/users" element={<Home  data={userList}/>}/>
        <Route path="/create-user" element={<Create  data={userList}/>}/>
        <Route path="/edit-user/:id" element={<Edit data={userList}/>}/>
        <Route path="/edit-profile/:id" element={<EditProfile data={userList} />}/>
        <Route path="/profile/:id" element={<Profile data={userList} />}/>        
      </Routes>

    </div>
  );
}

export default App;
