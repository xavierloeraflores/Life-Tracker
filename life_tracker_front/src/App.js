import Landing from './Landing/Landing'
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

import Activity from './Activity/Activity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      
      {/* <Register /> */}
      {/* <Signin /> */}
      {/* <Landing /> */}
      <Activity />
    <Footer />

    </div>
  );
}

export default App;
