import {} from "../generated/CurvetoCurvePipe/CurvetoCurvePipe"
import {
  Curve2CurveCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/CurvetoCurvePipe/CurvetoCurvePipe"
import {} from "../generated/schema"
import {
  CurvetoCurvePipeCurve2Curve,
  CurvetoCurvePipeapproveToken,
  CurvetoCurvePipedestruct,
  CurvetoCurvePipeinCaseTokengetsStuck,
  CurvetoCurvePiperenounceOwnership,
  CurvetoCurvePipetoggleContractActive,
  CurvetoCurvePipetransferOwnership,
  CurvetoCurvePipewithdraw
} from "../generated/schema"

export function handleCurve2Curve(call: Curve2CurveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipeCurve2Curve(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._incomingCurveExchange = call.inputs._incomingCurveExchange
  entity._IncomingCRV = call.inputs._IncomingCRV
  entity._toCurveExchange = call.inputs._toCurveExchange
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleapproveToken(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipeapproveToken(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handledestruct(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipedestruct(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipeinCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePiperenounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipetoggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipetransferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurvetoCurvePipewithdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
