import { useState } from 'react';
import {app} from './firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(app), email, password).then((userCredential) => {
        console.log(userCredential)
    }).catch((e)=>confirm(e + "false"))
    localStorage.setItem('email', email);
    navigate('/')

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
    </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>
        Password:
      </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      <Link to={"/SignUp"}>Don't have an account? Sign Up!</Link>
    </form>
  )
}

export default Landing;