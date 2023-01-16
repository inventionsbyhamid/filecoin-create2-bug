pragma solidity =0.5.16;

contract TestContract {
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
