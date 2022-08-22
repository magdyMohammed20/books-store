import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Books from './Components/Books/Books';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Books />
    </div>
  );
}

export default App;
