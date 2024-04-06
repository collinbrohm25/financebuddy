"use client";
import React, { useInsertionEffect, useState } from 'react';
import Text from './HopeText';
import AddClass from './HopeInput';
import ClassLists from './HopeList';
import './HopeTracker.css';

function Hope() {
   
  const DUMMY_USERS = [
   
]

  const [users, setUsers] = useState(DUMMY_USERS);

  const addClassHandler = user => {
    setUsers((prevUsers) => {
       return [user, ...prevUsers];
    });
  };

  return (
    <div className='Hope'>
      <AddClass onSaveUserData ={addClassHandler}/>
      <ClassLists items = {users}/>
    </div>
  );
}

export default Hope;