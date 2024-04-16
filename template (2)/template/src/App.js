import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './comp/header';
import Page1 from './comp/page1';
import Page2 from './comp/page2';
import Page3 from './comp/page3';
import Page4 from './comp/page4';
import Page5 from './comp/page5';
import Page6 from './comp/page6';
import Page7 from './comp/page7';
import Page8 from './comp/page8';
import Page9 from './comp/page9';
import Footer from './comp/footer';
import Copyright from './comp/copyright';
import Register from './comp/register';
import About from './comp/about.js';
import Login from './comp/login.js';
import Contact from './comp/contact.js';
import Recentwork from './comp/recentwork.js';
//import { Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
  <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Header' element={<Header/>}/> 
      <Route path='/Login' element={<Login/>}/>  
      <Route path='/page1' element={<Page1/>}/>
      <Route path='/Page2' element={<Page2/>}/>
      <Route path='/Page3' element={<Page3/>}/>
      <Route path='/Page4' element={<Page4/>}/>
      <Route path='/Page5' element={<Page5/>}/>
      <Route path='/Page6' element={<Page6/>}/>
      <Route path='/Page7' element={<Page7/>}/>
      <Route path='/Page8' element={<Page8/>}/>
      <Route path='/Page9' element={<Page9/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Copyright' element={<Copyright/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Recentwork" elements={<Recentwork/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
