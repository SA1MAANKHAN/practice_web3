pragma solidity ^0.4.17;

contract Lottery{

    address public manager;
    address[] public players; // dynamic as no number has been specified inside the square brackets

    function Lottery() public payable {
        manager = msg.sender;
    }

    function enter() public payable{
        require(msg.value > .01 ether); // to check if the req is satisfied 
        players.push(msg.sender);
    }

    function pickWinner() public{

        require(msg.sender == manager); // check if manager is calling pick winner

        uint index = random();
        players[index].transfer(this.balance);
        // clearing players array
        players = new address[](0);
    }

    function random() private view returns (uint){
       return uint(keccak256(block.difficulty, now, players )) % players.length;
    }

    function getPlayers() public view returns (address[]){
        return players;
    }
}