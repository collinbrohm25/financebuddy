"use client"
import React, {useState, useEffect } from 'react';
import Card from './HopeCard';
import './HopeText.css';
import Button from './HopeButton'


const Text = (props) => {

    const [name, setName] = useState(props.name);
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState({
       enteredUpdate: ''

    }
    )
    const updateChangeHandler = (event) => {
        setUpdate((prevState) => {
           return {...prevState,enteredUpdate: event.target.value}
        });
    }
    
    const submitHandler = (event) => {
    event.preventDefault();
        
    setUpdate({
      enteredUpdate: ''
    });
  };
    
  var yo = update.enteredUpdate

  const clickHandler = () => {
    setName(yo);
  };
 
    return (   
        <Card className= 'users' >
        <div className='user2' >
        <li key={props._id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2 className="top">{name}</h2>
            <h3 classNAme="middle">Class Hours: {props.hour} </h3>
            <h3 className="bottom">Grade: {props.grade}</h3>
            <button className='delete' type= 'button' onClick={props.handleDelete}>Delete</button>
        <form onSubmit={submitHandler} className='update'>
            <div className="visible">
            <input 
              id ="upd"
              type = "text"
              value = {update.enteredUpdate} required
              onChange={updateChangeHandler}
              maxLength= "10"
            />
            <Button onClick={clickHandler} type="submit">Update title</Button>
            </div>
            </form>
        </div>

        </li>
        </div>
        
        </Card>
        
    );

   
}


export default Text;
