import {} from "../generated/UniswapV2ZapInGeneralV2/UniswapV2ZapInGeneralV2"
import {
  ZapInCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV2ZapInGeneralV2/UniswapV2ZapInGeneralV2"
import {} from "../generated/schema"
import {
  UniswapV2ZapInGeneralV2ZapIn,
  UniswapV2ZapInGeneralV2inCaseTokengetsStuck,
  UniswapV2ZapInGeneralV2renounceOwnership,
  UniswapV2ZapInGeneralV2setnewdzgoodwillAddress,
  UniswapV2ZapInGeneralV2setnewgoodwill,
  UniswapV2ZapInGeneralV2toggleContractActive,
  UniswapV2ZapInGeneralV2transferOwnership,
  UniswapV2ZapInGeneralV2withdraw
} from "../generated/schema"

export function handleZapIn(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2ZapIn(id)
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity._ToUnipoolToken0 = call.inputs._ToUnipoolToken0
  entity._ToUnipoolToken1 = call.inputs._ToUnipoolToken1
  entity._amount = call.inputs._amount
  entity._minPoolTokens = call.inputs._minPoolTokens
  //entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapInGeneralV2withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
