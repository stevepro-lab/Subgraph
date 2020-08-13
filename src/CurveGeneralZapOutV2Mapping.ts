import {} from "../generated/CurveGeneralZapOutV2/CurveGeneralZapOutV2"
import {
  ZapOutCall,
  ZapoutToUnderlyingCall,
  _token2EthCall,
  _token2TokenCall,
  AddCRVTokenCall,
  AddCTokenCall,
  AddYTokenCall,
  ApproveTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetCRVTokenAddressesCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  Set_new_sUSDTokenAddressCall,
  SetcTokensCall,
  SetyTokensCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/CurveGeneralZapOutV2/CurveGeneralZapOutV2"
import {} from "../generated/schema"
import {
  CurveGeneralZapOutV2ZapOut,
  CurveGeneralZapOutV2ZapoutToUnderlying,
  CurveGeneralZapOutV2token2Eth,
  CurveGeneralZapOutV2token2Token,
  CurveGeneralZapOutV2addCRVToken,
  CurveGeneralZapOutV2addCToken,
  CurveGeneralZapOutV2addYToken,
  CurveGeneralZapOutV2approveToken,
  CurveGeneralZapOutV2inCaseTokengetsStuck,
  CurveGeneralZapOutV2renounceOwnership,
  CurveGeneralZapOutV2setCRVTokenAddresses,
  CurveGeneralZapOutV2setnewdzgoodwillAddress,
  CurveGeneralZapOutV2setnewgoodwill,
  CurveGeneralZapOutV2setnewsUSDTokenAddress,
  CurveGeneralZapOutV2setcTokens,
  CurveGeneralZapOutV2setyTokens,
  CurveGeneralZapOutV2toggleContractActive,
  CurveGeneralZapOutV2transferOwnership,
  CurveGeneralZapOutV2withdraw
} from "../generated/schema"

export function handleZapOut(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2ZapOut(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._curveExchangeAddress = call.inputs._curveExchangeAddress
  entity._tokenCount = call.inputs._tokenCount
  entity._IncomingCRV = call.inputs._IncomingCRV
  entity._ToTokenAddress = call.inputs._ToTokenAddress
  entity._minToTokens = call.inputs._minToTokens
  //entity.ToTokensBought = call.outputs.ToTokensBought
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleZapoutToUnderlying(call: ZapoutToUnderlyingCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2ZapoutToUnderlying(id)
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity._curveExchangeAddress = call.inputs._curveExchangeAddress
  entity._IncomingCRV = call.inputs._IncomingCRV
  entity._tokenCount = call.inputs._tokenCount
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoken2Eth(call: _token2EthCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2token2Eth(id)
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity._toWhomToIssue = call.inputs._toWhomToIssue
  entity.value0 = call.outputs.value0
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoken2Token(call: _token2TokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2token2Token(id)
  entity._FromTokenContractAddress = call.inputs._FromTokenContractAddress
  entity._ToWhomToIssue = call.inputs._ToWhomToIssue
  entity._ToTokenContractAddress = call.inputs._ToTokenContractAddress
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.tokenBought = call.outputs.tokenBought
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleaddCRVToken(call: AddCRVTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2addCRVToken(id)
  entity._exchangeAddress = call.inputs._exchangeAddress
  entity._crvTokenAddress = call.inputs._crvTokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleaddCToken(call: AddCTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2addCToken(id)
  entity._cToken = call.inputs._cToken
  entity._underlyingToken = call.inputs._underlyingToken
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleaddYToken(call: AddYTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2addYToken(id)
  entity._yToken = call.inputs._yToken
  entity._underlyingToken = call.inputs._underlyingToken
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleapproveToken(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2approveToken(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuck(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2inCaseTokengetsStuck(id)
  entity._TokenAddress = call.inputs._TokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetCRVTokenAddresses(
  call: SetCRVTokenAddressesCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setCRVTokenAddresses(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewsUSDTokenAddress(
  call: Set_new_sUSDTokenAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setnewsUSDTokenAddress(id)
  entity._new_sUSDTokenAddress = call.inputs._new_sUSDTokenAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetcTokens(call: SetcTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setcTokens(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetyTokens(call: SetyTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2setyTokens(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActive(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2toggleContractActive(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlewithdraw(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CurveGeneralZapOutV2withdraw(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}
