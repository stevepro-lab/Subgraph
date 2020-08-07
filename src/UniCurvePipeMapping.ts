import {} from "../generated/UniCurvePipe/UniCurvePipe"
import {
  Curve2UniCall,
  Uni2CurveCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniCurvePipe/UniCurvePipe"
import {} from "../generated/schema"
import {
  UniCurvePipeCurve2Uni,
  UniCurvePipeUni2Curve,
  UniCurvePipeapproveToken,
  UniCurvePipedestruct,
  UniCurvePipeinCaseTokengetsStuck,
  UniCurvePiperenounceOwnership,
  UniCurvePipetoggleContractActive,
  UniCurvePipetransferOwnership,
  UniCurvePipewithdraw
} from "../generated/schema"

export function handleCurve2Uni(call: Curve2UniCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipeCurve2Uni(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._incomingCurveExchange = call.inputs._incomingCurveExchange
  entity._IncomingCRV = call.inputs._IncomingCRV
  entity._toUniUnderlyingTokenAddress = call.inputs._toUniUnderlyingTokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleUni2Curve(call: Uni2CurveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipeUni2Curve(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._incomingUniUnderlyingTokenAddress =
    call.inputs._incomingUniUnderlyingTokenAddress
  entity._IncomingLPT = call.inputs._IncomingLPT
  entity._toCurveExchange = call.inputs._toCurveExchange
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleapproveToken(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipeapproveToken(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handledestruct(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipedestruct(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipeinCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePiperenounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipetoggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipetransferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniCurvePipewithdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
