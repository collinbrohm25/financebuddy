import React from 'react';
import Card from './HopeCard';
import './HopeText.css';

const Text = (props) => {
    return (    
        <Card className= 'users'>
        <div className='user2'>
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h3 className="top">{props.name}</h3>
            <h3 classNAme="middle">{props.hour} Class Hours</h3>
            <h3 className="bottom">Grade: {props.grade}</h3>
        </div>

        </li>
        </div>
        </Card>
    );
}

export default Text;
