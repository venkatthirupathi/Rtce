import { useState } from 'react';
import {app, database} from './firebase'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(getAuth(app), email, password);
      await database.ref(`users/${userCredential.user.uid}`).set({ username });
      
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
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

export default Signup;