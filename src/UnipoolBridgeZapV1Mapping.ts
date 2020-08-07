import {} from "../generated/UnipoolBridgeZapV1/UnipoolBridgeZapV1"
import {
  ZapBridgeCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_UniSwapFactoryAddressCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UnipoolBridgeZapV1/UnipoolBridgeZapV1"
import {} from "../generated/schema"
import {
  UnipoolBridgeZapV1ZapBridge,
  UnipoolBridgeZapV1destruct,
  UnipoolBridgeZapV1inCaseTokengetsStuck,
  UnipoolBridgeZapV1renounceOwnership,
  UnipoolBridgeZapV1setnewUniSwapFactoryAddress,
  UnipoolBridgeZapV1setnewdzgoodwillAddress,
  UnipoolBridgeZapV1setnewgoodwill,
  UnipoolBridgeZapV1toggleContractActive,
  UnipoolBridgeZapV1transferOwnership,
  UnipoolBridgeZapV1withdraw
} from "../generated/schema"

export function handleZapBridge(call: ZapBridgeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1ZapBridge(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity._IncomingLP = call.inputs._IncomingLP
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handledestruct(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1destruct(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewUniSwapFactoryAddress(
  call: Set_new_UniSwapFactoryAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1setnewUniSwapFactoryAddress(id)
  entity._new_UniSwapFactoryAddress = call.inputs._new_UniSwapFactoryAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UnipoolBridgeZapV1withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
