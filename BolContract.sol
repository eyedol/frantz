pragma solidity ^0.4.0;
contract BolContract {
    struct Case {
        address seller;
        address buyer;
        uint totalPrice;
        bool isPaid;
        bool isReleased;
    }
    
    mapping (uint8 => Case) public caseStorage;

    function BolContract() public {
    }
    
    function newCase(uint8 id, uint price) public { 
        caseStorage[id].seller = msg.sender;
        caseStorage[id].totalPrice = price;
        caseStorage[id].isPaid = false;
    }
    
    function pay(uint8 id) public payable returns (bool) {
        if (msg.value < caseStorage[id].totalPrice * 1 ether) { return false; }
        caseStorage[id].isPaid = true;
        caseStorage[id].buyer = msg.sender;
        return true;
    }
    
    function releaseFunds(uint8 id) public returns (bool success) {
        if (msg.sender != caseStorage[id].buyer) { return; }
        if (caseStorage[id].isPaid != true) { return; }
        if (caseStorage[id].isReleased == true) { return; }
        
        success = caseStorage[id].seller.send(caseStorage[id].totalPrice * 1 ether);
        if (success) {
            caseStorage[id].isReleased = true;
        }
        
        return;
    }
}
