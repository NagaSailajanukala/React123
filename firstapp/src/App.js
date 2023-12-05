//import logo from './logo.svg';
import './App.css';
import React from 'react';
import FunctionClick from './components/FunctionClick';

import { Greet } from './components/Greet'
// import  Hello from './components/Hello';
import Welcome from './components/Welcome' 
import FunctionClick from './components/FunctionClick';
// import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <Greet />
     {/* <Hello /> */}
     <Welcome name="Dinesh" desig="Lead" />
     <p> Team Lead</p>
     <Welcome name="Harish" desig="Trainee"/>
     <button>Click Here</button>
     <Welcome name="Asritha" desig="Trainee" />
     <FunctionClick/> 
     <Welcome name="Sailaja" desig="Trainee" />
     {/* <ListRender/> */}

    </div>
  );
}

export default App;
