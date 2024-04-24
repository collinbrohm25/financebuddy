"use client";
import React, { useInsertionEffect, useState } from 'react';
import Card from './HopeCard';
import User from './HopeText';
import './HopeList.css';


const ClassList = (props) => {

 

  return(

     <Card className = "users">
         {props.items.map((user) => (
            <User 
               key = {user.id}
               name = {user.name}
               hour = {user.hour}
               img = {user.img}
               grade = {user.grade}
            />
         ))}
     </Card>
 
  )
}

export default ClassList;