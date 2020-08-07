import {} from "../generated/UniswapV1ZapOutGeneralV2/UniswapV1ZapOutGeneralV2"
import {
  LetsWithdraw_onlyERCCall,
  LetsWithdraw_onlyETHCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  Set_new_goodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV1ZapOutGeneralV2/UniswapV1ZapOutGeneralV2"
import {} from "../generated/schema"
import {
  UniswapV1ZapOutGeneralV2LetsWithdrawonlyERC,
  UniswapV1ZapOutGeneralV2LetsWithdrawonlyETH,
  UniswapV1ZapOutGeneralV2inCaseTokengetsStuck,
  UniswapV1ZapOutGeneralV2renounceOwnership,
  UniswapV1ZapOutGeneralV2setnewgoodwill,
  UniswapV1ZapOutGeneralV2toggleContractActive,
  UniswapV1ZapOutGeneralV2transferOwnership,
  UniswapV1ZapOutGeneralV2withdraw
} from "../generated/schema"

export function handleLetsWithdrawonlyERC(
  call: LetsWithdraw_onlyERCCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2LetsWithdrawonlyERC(id)
  entity._TokenContractAddress = call.inputs._TokenContractAddress
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity._minTokensRec = call.inputs._minTokensRec
  entity._returnInDai = call.inputs._returnInDai
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleLetsWithdrawonlyETH(
  call: LetsWithdraw_onlyETHCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2LetsWithdrawonlyETH(id)
  entity._TokenContractAddress = call.inputs._TokenContractAddress
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity._minEthRec = call.inputs._minEthRec
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1ZapOutGeneralV2withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
