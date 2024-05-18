import './App.css'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import Login from './Login'
import Home from './Home'
import { Toaster } from 'react-hot-toast'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
// import ParticleWrapper  from './Components/Particales'

function App() {
  return (
    <>
      <div>
        <Toaster
        position='top-right'
        toastOptions={{
          success:{
            theme:{
              primary:'#4aed88'
            }
          }
        }}
        >
        </Toaster>
      </div>   
      <Routes>
        <Route path='/' element = {<Login/>}  />
        <Route path='/Home/:teamID' element={<Home/>} />
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>

      </Routes>
      {/* <ParticleWrapper/> */}
    </>
  )
}

export default App
