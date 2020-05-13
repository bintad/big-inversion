import React from 'react';
import Inversion from './components/inversion';
import './App.css';


function App() {
  return (
    <div className="App">
      <Inversion 
        firstName={"Doe"}
        lastName={"Jane"}
        age={45} 
        hairColor={"Black"}
      
      />
      <Inversion 
        firstName={"Smith"}
        lastName={"John"}
        age={88} 
        hairColor={"Brown"}
      
      />
      <Inversion 
        firstName={"Fillmore"}
        lastName={"Millard"}
        age={50} 
        hairColor={"Brown"}
      
      />
      <Inversion 
        firstName={"Smith"}
        lastName={"Maria"}
        age={62} 
        hairColor={"Brown"}
      
      />
     
     
     
    </div>
  );
}

export default App;
