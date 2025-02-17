pragma solidity ^0.8.0;

import "../interface/token721/IRbtDeposit721.sol";
import "../lib/TransferHelper.sol";
import "../erc20Factory.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract RainbowBank is Ownable{
    IRbtDeposit721 deposit;
    uint private reserve;
    address public token20;
    uint amount;
    mapping(address => bool) public allowTken;
    mapping(address => string) public bankName;
    event DepositToken(address to , uint indexed month ,uint indexed value);
    event Withdrawa(address indexed to,uint indexed tokenId);
    constructor(){
    }
    function init(address token , address _deposits)  public{
        token20 = token;
        deposit=IRbtDeposit721(_deposits);
    }
    function setBankName(string memory bName) public onlyOwner{
        bankName[address(this)] = bName;
    }
 

    function depositToken(address to,uint month,uint value,string memory name) external {
        require(month==0||month==3||month==6||month==12||month==24||month==36,"Deposit month error");
        ERC20(token20).transferFrom(to,address(this), value);
        deposit.mint(to, value, month ,name);
        uint balance=ERC20(token20).balanceOf(address(this));
        amount=balance-reserve;
        reserve = balance;
        emit DepositToken(to,month,value);
    }
    


    function withdrawa(address token,address to,uint tokenId) external {
        uint32 blockTime = uint32(block.timestamp % 2 ** 32);
        uint value=amount;
        require(blockTime>=deposit.expire(tokenId),'unable to extract');
        TransferHelper.safeTransfer(token20, to, value);
        deposit.burn(tokenId);
        uint balance=ERC20(token20).balanceOf(address(this));
        reserve =balance ;       
        emit Withdrawa(to,tokenId);
    }
}
