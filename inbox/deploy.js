const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {interface, bytecode} =  require("./compile")

const provider = new HDWalletProvider(
    "figure finish soul mirror hello ivory genius maid person afraid later afraid",
    "https://rinkeby.infura.io/v3/c567cc0b63d942309a7d0b3d294bde01"
)

const web3 = new Web3(provider);

const rinkbeyAcc = "0xB062089eE206529f5c478a18042Ee897ca04eF7b"

web3.eth.getBalance(rinkbeyAcc, async (err, bal)=>{
    console.log(await web3.utils.fromWei(bal,"ether"))
})

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    // selecting one accoint from the list of accounts that we got from the provider
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments:["Hello from Salmaan!"]})
        .send({
            from:accounts[0],
            gas:"1000000"
        })

        console.log(result)

        console.log("Contract has been deployed to =====> ", result.options.address)

}

deploy();