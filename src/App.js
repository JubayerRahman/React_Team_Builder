import React, { useEffect, useState } from'react';
import Team  from'./components/Team/team';
import './App.css';

function App() {
  const [addMember, setAddmember] = useState([]);
  const [member , setMember] =useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res  => res.json())
    .then(data => setMember(data.results));
  },[])
  function adding(member){
    console.log("Button Clicked");
    const newMember =[...addMember , member];
    setAddmember(newMember)
  }
  console.log(addMember);
  console.log(member);
  return (
    <div className='App'>
      <div className='adding sticky-top sticky-sm-bottom'>
      <h1>Added Members:{addMember.length}</h1>
      <ol>
        {
          addMember.map(addMember =><li><img src={addMember.picture.thumbnail} alt="wha"></img> {addMember.name.first+' '+addMember.name.last}</li>)
        }
      </ol>
      </div>
      {
        member.map(member=><Team adding={adding} member ={member}></Team>)
      }
    </div>
  );
}

export default App;
