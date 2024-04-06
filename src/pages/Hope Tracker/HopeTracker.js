"use client";
import React, { useInsertionEffect, useState } from 'react';
import User from './HopeText';
import AddUser from './HopeInput';
import Hdr from './HopeHdr';
import UsersLists from './HopeList';
import TotalHoursDisplay from './TotalHourDisplay';

function Home() {
  const [totalHours, setTotalHours] = useState(0);
  const DUMMY_USERS = [
   
]

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = user => {
    console.log(user.hour)
    setUsers((prevUsers) => {
       return [user, ...prevUsers];
    });
    const hoursToAdd = Number(user.hour); // Convert hour to a number if it's a string
        setTotalHours((prevTotalHours) => prevTotalHours + hoursToAdd);
  };

  return (
    <div>
      <Hdr />
      <AddUser onSaveUserData ={addUserHandler}/>
      <UsersLists items = {users}/>
      <TotalHoursDisplay totalHours={totalHours} />
    </div>
  );
}

export default Home;