import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/home';
import EditJob from './pages/editJob/editJob';
import AddJob from './pages/addJob/addJob'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/editJob/:id' element={<EditJob/>} />
        <Route path='/addJob' element={<AddJob/>} /> 
      </Routes>

 
    </div>
  );
}

export default App;
