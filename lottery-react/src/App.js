import React, { useEffect, useState } from "react";
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {

  const [manager, setmanager] = useState("");
  const [players, setplayers] = useState([]);
  const [balance, setbalance] = useState("")
  const [playerBet, setplayerBet] = useState("")
  const [currentStatus, setcurrentStatus] = useState("")

      const fetchData = async () =>{

        const manager  = await lottery.methods.manager().call();
        setmanager(manager);
               console.log(manager)

        const players = await lottery.methods.getPlayers().call();
        setplayers(players);
        console.log(players)

        const balance = await web3.eth.getBalance(lottery.options.address); 
        setbalance(balance);
                console.log(balance)

    }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = async (e) =>{
    e.preventDefault();

    setcurrentStatus("waiting for transaction to occur")
    const accounts = await web3.eth.getAccounts();
    console.log("You have bet" , playerBet)
    console.log(accounts[0])
    const res =  await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(playerBet, 'ether')
    });
    console.log(res)
    setplayerBet("");
    setcurrentStatus("SUCCESS!!")
  }

  const pickWinner = async () =>{

    setcurrentStatus("Please wait while winner is being picked!")

    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    setcurrentStatus("Winner was picked!")
  }

  return (


    <div className="app">
      <h1>Hello Welcome! Lottery Mania!!</h1>
      <p> This contract is managed by {manager}</p>
            <hr />
      <h1>Balance of the pool is {web3.utils.fromWei(balance, "ether")} ether</h1>
            <hr />
      <h1>Players in the pool are</h1>
      {
        players.map((item, i)=>{
          return <p key={i}>{item}</p>
        })
      }
      <hr />
      <form onSubmit={handleSubmit}>
        <h1>Want to try your luck</h1>
        <label htmlFor="">Enter amount to enter</label>
        <input type="text" value={playerBet} onChange={(e)=>{
          setplayerBet(e.target.value)
        }}/>
        <button type="submit">Enter</button>
      </form>
            <hr />

            <h1>Pink Winner!!</h1>
<button onClick={pickWinner}>Pick Winner</button>

 <hr />

 <h1>{currentStatus}</h1>

    </div>

  );
}

export default App;
