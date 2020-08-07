import {} from "../generated/BalancerZapInGeneralV25/BalancerZapInGeneralV25"
import {
  EasyZapInCall,
  _token2TokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/BalancerZapInGeneralV25/BalancerZapInGeneralV25"
import {} from "../generated/schema"
import {
  BalancerZapInGeneralV25EasyZapIn,
  BalancerZapInGeneralV25token2Token,
  BalancerZapInGeneralV25inCaseTokengetsStuck,
  BalancerZapInGeneralV25renounceOwnership,
  BalancerZapInGeneralV25setnewgoodwill,
  BalancerZapInGeneralV25toggleContractActive,
  BalancerZapInGeneralV25transferOwnership,
  BalancerZapInGeneralV25withdraw
} from "../generated/schema"

export function handleEasyZapIn(call: EasyZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25EasyZapIn(id)
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity._ToBalancerPoolAddress = call.inputs._ToBalancerPoolAddress
  entity._amount = call.inputs._amount
  entity._minPoolTokens = call.inputs._minPoolTokens
  entity.tokensBought = call.outputs.tokensBought
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoken2Token(call: _token2TokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25token2Token(id)
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.tokenBought = call.outputs.tokenBought
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapInGeneralV25withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
