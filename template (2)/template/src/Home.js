import React from "react";
import { BrowserRouter as Routes,Link, Route } from 'react-router-dom';
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

function Home (){
    return (
        <div className="container1">
      <div>
        <Header />
      </div>
      <div>
        <Page1 />
      </div>
      <div>
        <Page2 />
      </div>
      <div>
        <Page3 />
      </div>
      <div>
        <Page4 />
      </div>
      <div>
        <Page5 />
      </div>
      <div>
        <Page6 />
      </div>
      <div>
        <Page7 />
      </div>
      <div>
        <Page8 />
      </div>
      <div>
        <Page9 />
      </div>
      <div>
        <Footer />
      </div>
      
      <div>
        <Copyright/>
      </div>
    </div>
    );
}
export default Home