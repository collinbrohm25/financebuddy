import React from 'react';
import Card from './HopeCard';

const User = (props) => {
    return (    
        <Card className= 'users'>
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2>{props.name}</h2>
            <h3>{props.hour} Class Hours</h3>
            <h3 className="user-content">Grade: {props.grade}</h3>
        </div>
        </li>
        </Card>
    );
}

export default User;
