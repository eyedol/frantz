pragma solidity ^0.4.0;
contract BolContract {
    uint8 aiId;
    
    struct Case {
        address seller;
        address buyer;
        uint totalPrice;
        bool isPaid;
        bool isReleased;
    }
    
    mapping (uint8 => Case) public caseStorage;

    function BolContract() public {
        aiId = 0;
    }
    
    function newCase(uint amount, uint price) public returns (uint) { 
        uint8 id = aiId;
        aiId++;
        
        caseStorage[id].seller = msg.sender;
        caseStorage[id].totalPrice = amount * price;
        caseStorage[id].isPaid = false;
        return id;
    }
    
    function pay(uint8 id) public payable returns (bool) {
        if (msg.value < caseStorage[id].totalPrice) { return false; }
        caseStorage[id].isPaid = true;
        caseStorage[id].buyer = msg.sender;
        return true;
    }
    
    function releaseFunds(uint8 id) public returns (bool success) {
        if (msg.sender != caseStorage[id].buyer) { return; }
        if (caseStorage[id].isPaid != true) { return; }
        if (caseStorage[id].isReleased == true) { return; }
        
        success = caseStorage[id].seller.send(caseStorage[id].totalPrice);
        if (success) {
            caseStorage[id].isReleased = true;
        }
        
        return;
    }
}
