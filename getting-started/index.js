// Following Dap University

import Web3 from "web3";

// # VID 1 -------------------

// const url = "https://mainnet.infura.io/v3/c567cc0b63d942309a7d0b3d294bde01"

// const web3 = new Web3(url) 

// // console.log(web3)

// const address = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"

// web3.eth.getBalance(address, (err,bal)=>{
//     console.log(~~(web3.utils.fromWei(bal,"ether")));
// })

// const web3 = new Web3("HTTP://127.0.0.1:7545")

// web3.eth.getBalance("0x810C852535Cbb981fFA0242B06919Ae83c7d2AB9", (err,bal)=>{
//     console.log(web3.utils.fromWei(bal, "ether"));
// })

// # VID 2 -------------------

// const web3 = new Web3("https://mainnet.infura.io/v3/c567cc0b63d942309a7d0b3d294bde01")

// // const web3 = new Web3("HTTP://127.0.0.1:7545")

// const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"unfreeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"freezeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"freeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Unfreeze","type":"event"}]
// const contractAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";


// const contract = new web3.eth.Contract(abi, contractAddress);

// console.log(web3.utils.fromWei(await contract.methods.balanceOf("0x3b77804a3b221f1c8f985e2ef4fdf5efd078f86d").call(),"ether"))

// # VID 3 -------------------

// import Transaction  from 'ethereumjs-tx';

// const web3 = new Web3("https://ropsten.infura.io/v3/c567cc0b63d942309a7d0b3d294bde01");

// const account1 = "0xB062089eE206529f5c478a18042Ee897ca04eF7b"
// const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

// console.log(account1)
// console.log(process.env.PRIVATE_KEY_1)


// const account2 = "0xCfD6392f87af8227C762D692c2fb3A8D062adA96"
// const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, "hex")

// console.log(account2)
// console.log(process.env.PRIVATE_KEY_2)

// web3.eth.getTransactionCount(account1,(err, txCount)=>{

    
//     const txObject = {
//         noune:web3.utils.toHex(txCount),
//         to:account2,
//         value:web3.utils.toHex(web3.utils.toWei("1","ether")),
//         gasLimit:web3.utils.toHex(21000),
//         gasPrice:web3.utils.toHex(web3.utils.toWei("10","gwei")),
//     }

    //     web3.eth.getBalance(account2, (err,bal)=>{
    //     console.log(~~(web3.utils.fromWei(bal,"ether")), "ethers");
    // })

    // check gas price     

    // web3.eth.getGasPrice((err,price)=>{
    //     console.log(err, price)
    // })
    
    // const tx = new Transaction(txObject)
    // tx.sign(privateKey1)

    // const serializedTx = tx.serialize()
    // const raw = '0x' + serializedTx.toString('hex')

    // web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
    //     if(err) console.log("error", err)
    //     else console.log("success",txHash)
    // })

// })

// # VID 4 ------------------- NOT COMPLETE
