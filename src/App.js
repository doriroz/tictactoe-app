import logo from './logo.svg';

import './App.css';
import Board from './Component/Board';
import History from './Component/History';
import { useState } from 'react';
import appContext from './styleContext';


function App() {
  const [winner,setWinner]=useState();
  const [stylewin,setStylewin]=useState({
    opacity:0,
    fontSize:"40px",
  });
  const [board,setBoard] = 
    useState(Array(9).fill(null));
  const [history,setHistory]=useState([]);
  const [counter,setCounter] = useState(0);
  return (
    <appContext.Provider 
    value={{
      stylewin:stylewin,
      setStylewin,
      winner:winner,
      setWinner,
      counter:counter,
      setCounter, 
      history:history,
      setHistory
    }}>
    <div className="App">
      <h1>tic tac toe</h1>
      <h2 style={stylewin}>{`winner is ${winner}`}</h2>
      <div style={{display:"flex"}}>
        <Board board={board} updBoard={setBoard} updHistory={setHistory}/>
        <History board={board} updBoard={setBoard}/>
      </div>
    </div>
      </appContext.Provider>
      
  );
}

export default App;
