// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
contract AttestationRegistry {
 mapping(bytes32=>bool) public recognized;
 event DigestRecognized(bytes32 indexed digest);
 function recognize(bytes32 digest) external { require(digest!=bytes32(0),"empty digest"); recognized[digest]=true; emit DigestRecognized(digest); }
}
