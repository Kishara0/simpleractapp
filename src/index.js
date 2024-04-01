import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css";
import Header from './Layout/Header';
import Footer from './Layout/footer';
import Mainbody from './mainBody';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div style={{backgroundColor:"black", color:"gray"}}>
    <Header/>
    <div className='px-4'>
    <Mainbody/>
    </div>
    
    <Footer/>
   
</div>);
