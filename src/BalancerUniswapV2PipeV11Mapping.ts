import {} from "../generated/BalancerUniswapV2PipeV11/BalancerUniswapV2PipeV11"
import {
  PipeBalancerUniV2Call,
  PipeUniV2BalancerCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateZapAddressesCall,
  WithdrawCall
} from "../generated/BalancerUniswapV2PipeV11/BalancerUniswapV2PipeV11"
import {} from "../generated/schema"
import {
  BalancerUniswapV2PipeV11PipeBalancerUniV2,
  BalancerUniswapV2PipeV11PipeUniV2Balancer,
  BalancerUniswapV2PipeV11inCaseTokengetsStuck,
  BalancerUniswapV2PipeV11renounceOwnership,
  BalancerUniswapV2PipeV11toggleContractActive,
  BalancerUniswapV2PipeV11transferOwnership,
  BalancerUniswapV2PipeV11updateZapAddresses,
  BalancerUniswapV2PipeV11withdraw
} from "../generated/schema"

export function handlePipeBalancerUniV2(call: PipeBalancerUniV2Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11PipeBalancerUniV2(id)
  entity._FromBalancerPoolAddress = call.inputs._FromBalancerPoolAddress
  entity._IncomingBPT = call.inputs._IncomingBPT
  entity._toUniswapPoolAddress = call.inputs._toUniswapPoolAddress
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._minUniV2Tokens = call.inputs._minUniV2Tokens
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlePipeUniV2Balancer(call: PipeUniV2BalancerCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11PipeUniV2Balancer(id)
  entity._FromUniswapPoolAddress = call.inputs._FromUniswapPoolAddress
  entity._IncomingLPT = call.inputs._IncomingLPT
  entity._ToBalancerPoolAddress = call.inputs._ToBalancerPoolAddress
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._minBPTokens = call.inputs._minBPTokens
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleupdateZapAddresses(call: UpdateZapAddressesCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11updateZapAddresses(id)
  entity._balancerUnZap = call.inputs._balancerUnZap
  entity._uniZapIn = call.inputs._uniZapIn
  entity._balancerZapIn = call.inputs._balancerZapIn
  entity._uniUnZap = call.inputs._uniUnZap
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new BalancerUniswapV2PipeV11withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
