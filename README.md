# 스마트 컨트랙트 코드 설명

먼저 아래 두 프로그램을 설치합니다.

1) Ganache GUI 이는 컨트랙트를 실행할 로컬 서버처럼 동작하는 프로그램입니다.
https://trufflesuite.com/ganache/

2) Metamask : 이는 크롬확장프로그램으로 설치 가능하고, 이더리움 지갑입니다.
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn


그 다음 truffle 프레임워크를 설치합니다.
   npm install -g truffle
   

컨트랙트를 배포할 때는 먼저 컨트랙트를 컴파일 후 migrate 합니다.

   truffle compile --all
   truffle migrate


------------
### DeedToken.sol 코드 설명 - 사용할 코드만

1) 토큰 발행 : mint()


       function mint() external payable {

           uint tokenId = allTokens.push(1) - 1;
           //token id starts from 0, index of assets array
           tokenOwners[tokenId] = msg.sender;
           balances[msg.sender] = balances[msg.sender].add(1);

           //for enumeration
           allValidTokenIndex[tokenId] = allValidTokenIds.length;
           //index starts from 0
           allValidTokenIds.push(tokenId);

           emit Transfer(address(0), msg.sender, tokenId);



2) 토큰 전송 : safeTransferFrom()

         function safeTransferFrom(address _from, address _to, uint256 _tokenId) public payable {
              safeTransferFrom(_from, _to, _tokenId, "");
          }


3) 토큰 잔액 조회 : balanceOf()

       function balanceOf(address _owner) external view returns (uint256) {
           require(_owner != address(0));
           return balances[_owner];
       }

