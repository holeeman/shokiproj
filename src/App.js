import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("/food").then((res) => {
      console.log("hi");
      console.log(res.data);
    })
  }, [])
  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
