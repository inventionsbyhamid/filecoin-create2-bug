# Filecoin FVM Bug

This project demonstrates a bug related to create2 opcode in the Filecoin FVM.

How to run?

Create .env file similar to .env.example<br>
Add your test wallet details having enough FIL from wallaby faucet then run the following commands

```shell
npm i
npm run build
npx run deploy
```

Following error is thrown after running the above commands

```shell
bytecode =  0x6080604052348015600f57600080fd5b50607e8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806312065fe014602d575b600080fd5b60336045565b60408051918252519081900360200190f35b479056fea265627a7a723158203352944ee877c8027249b4a356795cd63b68e8d11413048439ee68eac70587d464736f6c63430005100032
expected address =  0x7EbDAF3641db8C84E2f32401453a7C06f46060B0


Error: cannot estimate gas; transaction may fail or may require manual gas limit
 [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ]
  (reason="message execution failed: exit 33, reason: message failed with backtrace:\n00: f01985 (method 2) 
  -- contract reverted (33)\n01: f010 (method 3) 
  -- Serialization error for Cbor protocol: Mismatch { expect_major: 2, byte: 152 } (21)\n (RetCode=33)"
  , method="estimateGas", transaction={"from":"0x3ceB74b0e72da456Ca5FfFAb1f0AeA831FC10231","to":"0xe749805c95a81F779354e37f74DB0D2fbA2A2E81",
  "data":"0x9c4ae2d000000000000000000000000000000000000000000000000000000000000000407465737400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009c6080604052348015600f57600080fd5b50607e8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806312065fe014602d575b600080fd5b60336045565b60408051918252519081900360200190f35b479056fea265627a7a723158203352944ee877c8027249b4a356795cd63b68e8d11413048439ee68eac70587d464736f6c6343000510003200000000","accessList":null},
  error={"name":"ProviderError","_stack":"ProviderError: HttpProviderError\n    at HttpProvider.request (/Users/inventionsbyhamid/WebstormProjects/filecoin-create2-bug/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)\n
  at LocalAccountsProvider.request (/Users/inventionsbyhamid/WebstormProjects/filecoin-create2-bug/node_modules/hardhat/src/internal/core/providers/accounts.ts:187:34)\n
  at processTicksAndRejections (node:internal/process/task_queues:95:5)\n
  at EthersProviderWrapper.send (/Users/inventionsbyhamid/WebstormProjects/filecoin-create2-bug/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":1,"_isProviderError":true},
   code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
```

Screenshot

![UNPREDICTABLE_GAS_LIMIT](images/screenshot_error.png?raw=true "UNPREDICTABLE_GAS_LIMIT")
