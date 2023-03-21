import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Main from './Main';

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(()=>{
    axios.get("/food").then((res) => {
      console.log("hi");
      console.log(res.data);
      setFoods(res.data);
    })
  }, [])
  return (
    <div className="App">
      <h1>test</h1>
      <Main/>
    </div>
  );
}

export default App;
