import React from 'react';
import  {useState, useEffect}  from 'react-dom';
import  {Routes, Route} from 'react-router-dom';
import Landing from './Landing/Landing'
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Excersise from './Excersise/Excersise';
import Activity from './Activity/Activity';
import apiclient from "./apiclient";
import './App.css';

function App() {
  const user=1;
  const setUser=1;
  // const [user, setUser] = useState({});
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await apiclient.fetchUserFromToken();
  //     if (data) setUser(data.user);
  //     if (error) setError(error);
  //   };
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     apiclient.setToken(token);
  //     fetchUser();
  //   }
  // }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/register' element={<Register  user={user} setUser={setUser}/>} />
        <Route path='/signin' element={<Signin user={user} setUser={setUser}/> } />
        <Route path='/activity' element={<Activity/>} />
        <Route path='/exercise' element={<Excersise/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
