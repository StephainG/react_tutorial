// import { useState } from 'react';
import './App.css';
import Prayer from './components/Prayer.js';
import Saturday from './components/Saturday.js';
import Sunday from './components/Sunday.js';
import Wednesday from './components/Wednesday.js';


function App() {
  // const [name, setName] = useState('Welcome Kunle')

  // const login = () => {
  //   console.log('login');
  // }
  // const logout = (name) => {
  //   setName('Goodbye ' + name)
  // }
  return (
    <div className="App">
      <div className="header">
        {/* <h1>{name}</h1> */}
        <div className = "title"></div>
        <p className = "ministry">Sanctuary Care Ministry</p>
        <Sunday />
        <Wednesday />
        <Saturday />
        <Prayer />

        {/* <button onClick={login}>Log In</button>
        <button onClick={() => {logout('Kunle')}}>Logout</button> */}
      </div>
    </div>
  );
}

export default App;
