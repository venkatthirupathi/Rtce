import { useState } from 'react';
// import Cookies from 'js-cookie'
// import Tile from './Components/Tile';
import {app} from './firebase';
import {useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 
const handleSubmit = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(getAuth(app), email, password).then((userCredential) => {
      console.log(userCredential)
  }).catch((e)=>confirm(e + "false"))
  localStorage.setItem('email', email);
  }
const Landing = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(getAuth(app), email, password);
  //     await database.ref(`users/${userCredential.user.uid}`).set({ username });
  //     console.log("user created" + userCredential)
      
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //   }
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(getAuth(app), email, password).then((userCredential) => {
  //       console.log(userCredential)
  //   }).catch((e)=>confirm(e + "false"))
  //   localStorage.setItem('email', email);
  
  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   </label>
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   </label>
    //   <button type="submit">Submit</button>
    // </form>
    <div>
     

    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>SIGN UP</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              {/* <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> */}
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Label htmlFor="">Password</Label>
              <Input id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>Sign Up</Button>
      </CardFooter>
    </Card>
  


    </div>
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