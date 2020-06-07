import React,{useState,useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';
import FriendsForm from './friendForm';
export default function Protected() {
  const[friends,setFriends]  = useState([]);
  useEffect(()=>{
    axiosWithAuth().get('/api/friends')
        .then(res=>{setFriends(res.data);
        console.log(friends)})
        .catch(err=>console.log(err))
}, []);
const addItem = (peep)=>{
    const newPeep={
id: Date.now(),
name: peep.name,
age: peep.age,
email: peep.email
    }
    setFriends([...friends, newPeep])
}

    return (
        <div>
            <h1>My friend List</h1>
            <div>dont know what to do </div>
            <div>{friends.map(e => <div key={e.id}>{e.name} {e.age}</div>)}</div>
            <FriendsForm setData={setFriends} addItem={addItem}/>
        </div>
    )
}
