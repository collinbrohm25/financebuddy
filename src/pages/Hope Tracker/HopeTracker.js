"use client";
import React, { useInsertionEffect, useState } from 'react';
import User from './HopeText';
import AddUser from './HopeInput';
import Hdr from './HopeHdr';
import UsersLists from './HopeList';



function Home() {
   
  const DUMMY_USERS = [
   
]

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = user => {
    setUsers((prevUsers) => {
       return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <Hdr />
      <AddUser onSaveUserData ={addUserHandler}/>
      <UsersLists items = {users}/>
      
    </div>
  );
}

export default Home;