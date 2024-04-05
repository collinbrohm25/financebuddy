import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Hope = (props) =>  {
  const[grade,setGrade] = useState('')

  const gradeHandler = (event) => {
    setGrade(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newGrade = {
      grade : grade
    }
    props.Hope(newGrade)
    setGrade('')
  };

  return (
    <Card className = "input">
      <form onSubmit = {submitForm}>
        <label>Grade</label>
        <input
        id = "grade"
        value = {grade}
        onChange = {gradeHandler}
        />
        <Button type = "submit">Add Grade</Button>
      </form>
    </Card>
  )

  
}
export default Hope;