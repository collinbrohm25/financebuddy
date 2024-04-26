"use client"
import React, {useState } from 'react';
import Card from './HopeCard';
import './HopeText.css';


const Text = (props) => {

 
    return (   
        <Card className= 'users' >
        <div className='user2' >
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2 className="top">{props.name}</h2>
            <h3 classNAme="middle">Class Hours: {props.hour} </h3>
            <h3 className="bottom">Grade: {props.grade}</h3>
            <button className='delete' type= 'button' onClick={props.handleDelete}>Delete</button>
        </div>

        </li>
        </div>
        </Card>
    );

   
   
}

export default Text;
