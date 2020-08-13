import {} from "../generated/UniswapV2ZapOutGeneralV2/UniswapV2ZapOutGeneralV2"
import {
  ZapOutCall,
  ZapOut2PairTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV2ZapOutGeneralV2/UniswapV2ZapOutGeneralV2"
import {} from "../generated/schema"
import {
  UniswapV2ZapOutGeneralV2ZapOut,
  UniswapV2ZapOutGeneralV2ZapOut2PairToken,
  UniswapV2ZapOutGeneralV2inCaseTokengetsStuck,
  UniswapV2ZapOutGeneralV2renounceOwnership,
  UniswapV2ZapOutGeneralV2setnewdzgoodwillAddress,
  UniswapV2ZapOutGeneralV2setnewgoodwill,
  UniswapV2ZapOutGeneralV2toggleContractActive,
  UniswapV2ZapOutGeneralV2transferOwnership,
  UniswapV2ZapOutGeneralV2withdraw
} from "../generated/schema"

export function handleZapOut(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2ZapOut(id)
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity._FromUniPoolAddress = call.inputs._FromUniPoolAddress
  entity._IncomingLP = call.inputs._IncomingLP
  entity._minTokensRec = call.inputs._minTokensRec
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2ZapOutGeneralV2withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
