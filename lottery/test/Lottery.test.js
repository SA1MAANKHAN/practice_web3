// something's fishy as all tests are passing, even though some are expected to fail
// PS check manual testing

const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3")
const {interface, bytecode} = require("../compile")

const web3 = new Web3(ganache.provider());

let accounts;
let lottery; 

// some manual testing

// const deploy = async () =>{

//   accounts = await web3.eth.getAccounts() 
  
//   // use on of the account to deploy the contract
//   lottery = await new web3.eth.Contract(JSON.parse(interface))
//   .deploy({data: bytecode})
//   .send({
//     from: accounts[0],
//     gas: "1000000"
//   })

//  await lottery.methods.enter().send({
//         from: accounts[0],
//         value:  web3.utils.toWei("1","ether")
//         // value:0,
//          });

//     // console.log( " hello ",res)

//     try{   
//       await lottery.methods.pickWinner().send({
//         from: accounts[0]
//       });
//     }catch(err){
//       console.log("helloooooooo")
//     }  
// }

// deploy();

beforeEach( async ()=>{
    // get a list of all acounts
    accounts = await web3.eth.getAccounts() 

    // use on of the account to deploy the contract
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({
            from: accounts[0],
            gas: "1000000"
        })


})

describe('Lottery', () => {

  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });

  it('players can enter', async () => {
     await lottery.methods.enter().send({ from: accounts[1], value: web3.utils.toWei("1","ether")});

     const playersArray =  await lottery.methods.getPlayers().call();

     assert.equal(accounts[1], playersArray[0], "player was added");

  });

    it('multiple players can enter', async () => {
     await lottery.methods.enter().send({ from: accounts[1], value: web3.utils.toWei("1","ether")});
     await lottery.methods.enter().send({ from: accounts[2], value: web3.utils.toWei("1","ether")});
     await lottery.methods.enter().send({ from: accounts[3], value: web3.utils.toWei("1","ether")});

     const playersArray =  await lottery.methods.getPlayers().call();

     assert.equal(accounts[1], playersArray[0], "player was added");
     assert.equal(accounts[2], playersArray[1], "player was added");
     assert.equal(accounts[3], playersArray[2], "player was added");

  });
  

  it('requires a minimum amount of ether to enter', async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        // value: 0
        value: web3.utils.toWei("1","ether")
      });
      assert.fail()
    } catch (err) {
      assert(err);
    }
  });

  it('only manager can call pickWinner', async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      });
      assert.fail()
    } catch (err) {
      assert(err);
    }
  });

    it('sends money to the winner and resets the players array', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;

    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
  
});
