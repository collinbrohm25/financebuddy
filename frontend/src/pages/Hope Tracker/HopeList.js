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
               key = {user.id}
               name = {user.name}
               hour = {user.hour}
               img = {user.img}
               grade = {user.grade}
               handleDelete={() => props.handleDelete(index)}
               upd = {user.upd}
            />
         ))}
     </Card>
 
  )
}

export default ClassList;