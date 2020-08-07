import {} from "../generated/BalancerZapOutGeneralV2/BalancerZapOutGeneralV2"
import {
  EasyZapOutCall,
  ZapOutCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/BalancerZapOutGeneralV2/BalancerZapOutGeneralV2"
import {} from "../generated/schema"
import {
  BalancerZapOutGeneralV2EasyZapOut,
  BalancerZapOutGeneralV2ZapOut,
  BalancerZapOutGeneralV2inCaseTokengetsStuck,
  BalancerZapOutGeneralV2renounceOwnership,
  BalancerZapOutGeneralV2setnewdzgoodwillAddress,
  BalancerZapOutGeneralV2setnewgoodwill,
  BalancerZapOutGeneralV2toggleContractActive,
  BalancerZapOutGeneralV2transferOwnership,
  BalancerZapOutGeneralV2withdraw
} from "../generated/schema"

export function handleEasyZapOut(call: EasyZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2EasyZapOut(id)
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity._FromBalancerPoolAddress = call.inputs._FromBalancerPoolAddress
  entity._IncomingBPT = call.inputs._IncomingBPT
  entity._minTokensRec = call.inputs._minTokensRec
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleZapOut(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2ZapOut(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity._FromBalancerPoolAddress = call.inputs._FromBalancerPoolAddress
  entity._IncomingBPT = call.inputs._IncomingBPT
  entity._IntermediateToken = call.inputs._IntermediateToken
  entity._minTokensRec = call.inputs._minTokensRec
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerZapOutGeneralV2withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
