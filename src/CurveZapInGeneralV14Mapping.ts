import {} from "../generated/CurveZapInGeneralV14/CurveZapInGeneralV14"
import {
  ZapInCall,
  ApproveTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/CurveZapInGeneralV14/CurveZapInGeneralV14"
import {} from "../generated/schema"
import {
  CurveZapInGeneralV14ZapIn,
  CurveZapInGeneralV14approveToken,
  CurveZapInGeneralV14inCaseTokengetsStuck,
  CurveZapInGeneralV14renounceOwnership,
  CurveZapInGeneralV14setnewdzgoodwillAddress,
  CurveZapInGeneralV14setnewgoodwill,
  CurveZapInGeneralV14toggleContractActive,
  CurveZapInGeneralV14transferOwnership,
  CurveZapInGeneralV14withdraw
} from "../generated/schema"

export function handleZapIn(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14ZapIn(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._IncomingTokenAddress = call.inputs._IncomingTokenAddress
  entity._curvePoolExchangeAddress = call.inputs._curvePoolExchangeAddress
  entity._IncomingTokenQty = call.inputs._IncomingTokenQty
  entity._minPoolTokens = call.inputs._minPoolTokens
  entity.crvTokensBought = call.outputs.crvTokensBought
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleapproveToken(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14approveToken(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveZapInGeneralV14withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
