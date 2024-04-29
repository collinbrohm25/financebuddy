"use client";
import React, { useInsertionEffect, useState } from 'react';
import Card from './HopeCard';
import Button from './HopeButton';
import './HopeInput.css';


const AddClass = (props) => {
   
  const [userInput, setUserInput] = useState({
     enteredName: '',
     enteredHour: '',
     enteredImg: '',
     enteredGrade:'',

  });

  
  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
       return {...prevState, enteredName: event.target.value}
    });
  }

  const hourChangeHandler = (event) => {
    setUserInput((prevState) => {
       return {...prevState, enteredHour: event.target.value}
    });
  }

  const imgChangeHandler = (event) => {
    setUserInput((prevState) => {
       return {...prevState, enteredImg: event.target.value}
    });
  }

  const gradeChangeHandler = (event) => {
    setUserInput((prevState) => {
       return {...prevState, enteredGrade: event.target.value}
    });
  }

  const findClassHandler = (event) => {

    const message = `Finding class deals with the name: ${userInput.enteredName}`;


      
    window.alert(message);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const userData = {
      name: userInput.enteredName,
      hour: userInput.enteredHour,
      img: userInput.enteredImg,
      grade: userInput.enteredGrade,
      _id: Math.random().toString()
    };

    
   
    console.log(userData);
    props.onSaveUserData(userData);
    
    setUserInput({
      enteredName: '',
      enteredHour: '',
      enteredImg: '',
      enteredGrade:''
    });
  };

  return (
    <div>
    <Card className="input">
      <form onSubmit={submitHandler} className='HopeInput'>
        <label className="name">Class Name</label>
        <input
          id="name"
          type="text"
          value={userInput.enteredName} required
          onChange={nameChangeHandler}
          minLength= "1"
          maxLength= "10"
        />
        <label className ="hour">Class Hours</label>
        <input
          id="hour"
          type="number"
          value={userInput.enteredHour} 
          onChange={hourChangeHandler}
        />
        <label className = "img">Image for Class</label>
         <input
          id="img"
          type="text"
          value={userInput.enteredImg}
          onChange={imgChangeHandler}
        />
        <label className='grade'>Grade</label>
         <input
          id="grade"
          type="text"
          value={userInput.enteredGrade}
          onChange={gradeChangeHandler}
          maxLength= "2"
        />
        <Button type="submit">Add Class</Button>
        <Button type="button" onClick={findClassHandler}>Find Class</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddClass;
