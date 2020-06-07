import React,{useState} from 'react'
import axios from 'axios';

export default function Login(props) {
const [data,setData]  = useState({
    username:'',
    password:''
});

const handleChange = (e)=>{
    setData({...data,
    [e.target.name]:e.target.value})
}

const submitLogin = (e)=>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        console.log('res info',res);
        localStorage.setItem("token", res.data.payload);
        
        props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
}
  return (
<div>
    <form className='form' onSubmit={submitLogin}>
         <input name='username' type='text' placeholder='username' onChange={handleChange}/>
         <input name='password' type='password' placeholder='password' onChange={handleChange} />
         <br />
         <button>SUBMIT</button>
     </form>
</div>
    )
}
