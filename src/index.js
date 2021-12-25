import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import Userform from './marvel/UserForm';

// const Userform = () =>{
//   const [usernameInput, setUsernameInput] = useState('');
//   return(
//           <div className="username-input-form">
//               <input className="username-input" type="text" value={usernameInput} onChange={e => setUsernameInput(e.target.value)} />
//               <button className="username-button">submit</button>
//           </div>
//   )
// }

const hero = (name)=>{
  alert(name.toUpperCase())

}




ReactDOM.render(
  <App/>,

 document.getElementById('root')
);





