//MetaToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "erc721a/contracts/ERC721A.sol";


contract MetaToken is ERC721A{
    address public owner;

     // Base URL for the NFTs
    string public baseUrl = "https://gateway.pinata.cloud/ipfs/QmX7E4BYdnjweCdRARsWccz7SRU1q4szi994r4h9AqRrKk/?_gl=1*n528oq*_ga*MjAxNTczMzI0Mi4xNjkyNzkwNjQ0*_ga_5RMPXG14TE*MTY5Mjk5NzA2Ni42LjEuMTY5Mjk5NzE0Ny42MC4wLjA.";

    // Prompt descriptions
    
    string public description ="An impressionist oil painting of sunflower in a purple vase";

    constructor() ERC721A("MetaToken", "MTA") {
        owner = msg.sender;
        
    }

    
    // Modifier that only allows the owner to execute a function
    modifier ownerAllowed() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }
    // Function to mint NFTs which only the owner can perform
    function mint(uint256 quantity) external payable ownerAllowed() {
        require(quantity <= 5, "Only 5 NFTs can be minted at a time");
            
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

   
    // Return the prompt descriptions
    function promptDescription() external view returns (string memory) {
        return description;
    }


}