// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AttestationAnchor {
    event Anchored(bytes32 indexed digest, address indexed submitter);

    function anchor(bytes32 digest) external {
        require(digest != bytes32(0), "empty digest");
        emit Anchored(digest, msg.sender);
    }
}
