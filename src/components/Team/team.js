import React from 'react';
import './teamStyle.css'

const team = (props) => {
     //  const [mobile , setNumber] = useState('');
    // const [mobile , setNumber] = useState(' ');
    // const number = () => setNumber(props.member.phone)
    return (
        <div className='team'>
            <div>
            <img src={props.member.picture.large} alt='404'></img>
            </div>
            <div className='data'>
            <p>Hi, I am <b>{props.member.name.first +" "+props.member.name.last}</b> </p>
           <p>Gender: {props.member.gender}</p>
           <p>Email: {props.member.email}</p> 
           <p>Number: {props.member.phone}</p>
           <button onClick={()=>props.adding(props.member)} >Add Member</button> 
           </div>
        </div>
    );
};

export default team;