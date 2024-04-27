"use client";
import React, {useState } from 'react';
import Text from './HopeText';
import AddClass from './HopeInput';
import ClassLists from './HopeList';
import TotalHoursDisplay from './TotalHourDisplay';
import './HopeTracker.css';
import HopeGPA from './HopeGPA';

function Hope() {
  const [totalHours, setTotalHours] = useState(12);
  const mongoose = require('mongoose')

  const GradeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    }
  });
  const DUMMY_USERS = [
{
    name: 'Systems',
    hour: '4',
    grade: 'A',
    img: 'https://i0.wp.com/asiatimes.com/wp-content/uploads/2017/07/15048058263_05c06bf2fd_z.jpg?fit=640%2C426',
    id: '123'

} ,
{
    name: "Web Programming",
    hour: '4',
    grade: 'A',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    id: '432'
},
{
  name: "Networks",
  hour: '4',
  grade: 'A',
  img: 'data:image/jpeg;base64,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',
  id: "452"
}
]

  const [users, setUsers] = useState(DUMMY_USERS);

   const deleteItem = (id) => {
      const updatedUsers = users.filter((_, i) => i !== id);
      setUsers(updatedUsers);

   };


  const addClassHandler = user => {
    setUsers((prevUsers) => {
       return [user, ...prevUsers];
    });
    const hoursToAdd = Number(user.hour); // Convert hour to a number if it's a string
      setTotalHours((prevTotalHours) => prevTotalHours + hoursToAdd);
    
  };

  const hours = users.map(user => Number(user.hour))  ;
  const grades = users.map(user => user.grade);


  return (
    <div className='Hope'>
      <AddClass onSaveUserData ={addClassHandler}/>
      <HopeGPA hours={hours} grades={grades}/>
      <ClassLists items = {users} handleDelete ={deleteItem} />
    </div>
  );
}

export default Hope;