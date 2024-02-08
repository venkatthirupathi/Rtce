import { useState } from 'react';
// import Cookies from 'js-cookie'
// import Tile from './Components/Tile';
import {app} from './firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(app), email, password).then((userCredential) => {
        console.log(userCredential)
    }).catch((e)=>confirm(e + "false"))
    localStorage.setItem('email', email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

// const Home = () => {
//   const email = localStorage.getItem('email');
//   return (
//     <div>
//       <h1>Welcome, {email}!</h1>
//       <Tile title="Education" description="Teach And Show Examples At Same Time"/>
//     </div>
//   )
// }

export default Landing;