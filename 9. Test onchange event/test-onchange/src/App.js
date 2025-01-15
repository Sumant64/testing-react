import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <h1>First React Test Case</h1>
      <h2>Hello World</h2>
      <input type='text'
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder='Enter User Name' name='username' id='userId' />
    </>
  );
}

export default App;
