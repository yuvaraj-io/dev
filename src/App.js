import './App.css';
import Header from './stable-components/Header.js'
import {BiCoffee} from "react-icons/bi";
import { Routes, Route } from 'react-router-dom';
import { redirect } from './commons/common-method';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Learn from './pages/learn';
import Edit from './pages/edit.js'
import Medium from './pages/medium';
import Stackblitz from './pages/stackblitz';
import Contact from './pages/connect-me';
import Write from './pages/write';
import About from './pages/about';
import CreateTopics from './pages/create-topics';

import Footer from './stable-components/Footer';

function App() {
  return (
    
    <div className="App bg-gray-800 text-white">
      <Header/> 
      <div className='container mx-auto mob:px-8 des:px-10 pt-7r pb-28'>
        
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/connect" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/medium" element={<Medium />} />
            <Route path="/stackblitz" element={<Stackblitz />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/write" element={<Write />} />
            <Route path="/topics" element={<CreateTopics />} />
            <Route path="/sections" element={<CreateTopics />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>

          

      </div>
      <div className='mt-20'></div>
      <div className='fixed z-20 bottom-80 right-20 bg-purple-400 border border-slate-400 flex flex-col items-center p-4 rounded' onClick={() => redirect('https://buymeacoffee.com/yuvidev')} >  <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me a Coffee" 
          className="h-12"
        />
        </div>
      <div className='fixed w-full z-10 bottom-0 bg-gray-800'>
        <Footer/> 
      </div>
    </div>
  );
}

export default App;
