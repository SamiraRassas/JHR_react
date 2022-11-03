import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Homedetails from './Components/Home/HomeDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SingIn';
import SignUp from './Components/SignUP/SignUp';
import Footer from './Components/Footer/Footer';
import Card from './Components/Cards/Card';
import Search from './Components/Home/Search';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
          <Route path="home" element = {< Home />}/>
          <Route path='about' element ={<About />} />
          <Route path='contact' element ={<Contact />} />
          <Route path='signin' element={< SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='explore' element={<Card />} />
          <Route path='homedetails' element={<Homedetails />} />
          <Route path='search' element={<Search />} />
          {/* <Route path="contact" element = {<Contact />}/>
          <Route path="project1" element = {<Card />} /> */}
      </Routes>
    
   
    </Router>
    <Footer />
    </>
  );
}

export default App;
