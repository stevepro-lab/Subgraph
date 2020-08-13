import {} from "../generated/UniV1V2Pipe/UniV1V2Pipe"
import {
  V1_to_V2_PipeCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniV1V2Pipe/UniV1V2Pipe"
import {} from "../generated/schema"
import {
  UniV1V2PipeV1toV2Pipe,
  UniV1V2Pipedestruct,
  UniV1V2PipeinCaseTokengetsStuck,
  UniV1V2PiperenounceOwnership,
  UniV1V2PipesetnewdzgoodwillAddress,
  UniV1V2Pipesetnewgoodwill,
  UniV1V2PipetoggleContractActive,
  UniV1V2PipetransferOwnership,
  UniV1V2Pipewithdraw
} from "../generated/schema"

export function handleV1toV2Pipe(call: V1_to_V2_PipeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PipeV1toV2Pipe(id)
  entity.fromTokenAddress = call.inputs.fromTokenAddress
  entity.uniV1Amount = call.inputs.uniV1Amount
  entity.toTokenAddress = call.inputs.toTokenAddress
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  //entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handledestruct(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2Pipedestruct(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PipeinCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PiperenounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PipesetnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2Pipesetnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PipetoggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2PipetransferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniV1V2Pipewithdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
