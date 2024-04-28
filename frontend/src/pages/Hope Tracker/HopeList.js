"use client";
import React, { useState } from 'react';
import Card from './HopeCard';
import User from './HopeText';
import './HopeList.css';


const ClassList = (props) => {

 

  return(

     <Card className = "users">
         {props.items.map((user,index) => (
            <User 
               key = {user._id}
               name = {user.name}
               hour = {user.hour}
               img = {user.img}
               grade = {user.grade}
               handleDelete={() => props.handleDelete(index,user)}
               clickHandler={() => props.clickHandler(user)}
               upd = {user.upd}
            />
         ))}
     </Card>
 
  )
}

export default ClassList;