import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <h1>Test click event with button</h1>
      <button onClick={() => setData("updated data")}>Update data</button>
      <h1>{data}</h1>
    </>
  );
}

export default App;
