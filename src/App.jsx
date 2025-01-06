import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,SetUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      // console.log("This is admin panel");
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({"role":"admin"}));
    }
    else if(userData){
      // console.log("This is user panel");
      const employee = userData.find((e)=>e.email==email && e.password==password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }
    }
    else{
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      {!user?<Login handleLogin={handleLogin} />:''}
      {user=='admin'?<AdminDashboard changeUser={setUser} /> : (user=='employee'?<EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/> : null)}
    </div>
  )
}

export default App
