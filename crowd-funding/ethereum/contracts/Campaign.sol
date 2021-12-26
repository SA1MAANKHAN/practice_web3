pragma solidity ^0.4.17;

contract CampaignFactory{

    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() view public returns(address[]) {
        return deployedCampaigns;
    }

}

contract Campaign{

    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    mapping(address => bool) public approvers;
    uint public minimumContribution;
    uint public approversCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution); // to check if the req is satisfied 
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint val, address recipient) public restricted{

        Request memory newRequest = Request({
            description : description,
            value : val,
            recipient : recipient,
            complete : false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public{

        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;

    }

    function finalizeRequest(uint index) public restricted{
        
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount/2));

        request.recipient.transfer(request.value);
        request.complete = true;

    } 

}