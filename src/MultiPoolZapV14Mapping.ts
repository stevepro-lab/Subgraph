import {} from "../generated/MultiPoolZapV14/MultiPoolZapV14"
import {
  MultipleZapInCall,
  RenounceOwnershipCall,
  Set_UniswapFactoryCall,
  Set_new_dzgoodwillAddressCall,
  Set_new_goodwillCall,
  Set_uniswapPoolZapAddressCall,
  TransferOwnershipCall
} from "../generated/MultiPoolZapV14/MultiPoolZapV14"
import {} from "../generated/schema"
import {
  MultiPoolZapV14multipleZapIn,
  MultiPoolZapV14renounceOwnership,
  MultiPoolZapV14setUniswapFactory,
  MultiPoolZapV14setnewdzgoodwillAddress,
  MultiPoolZapV14setnewgoodwill,
  MultiPoolZapV14setuniswapPoolZapAddress,
  MultiPoolZapV14transferOwnership
} from "../generated/schema"

export function handlemultipleZapIn(call: MultipleZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14multipleZapIn(id)
  entity._IncomingTokenContractAddress =
    call.inputs._IncomingTokenContractAddress
  entity._IncomingTokenQty = call.inputs._IncomingTokenQty
  entity.underlyingTokenAddresses = call.inputs.underlyingTokenAddresses
  entity.respectiveWeightedValues = call.inputs.respectiveWeightedValues
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnership(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14renounceOwnership(id)

  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapFactory(call: Set_UniswapFactoryCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14setUniswapFactory(id)
  entity._UniswapFactory = call.inputs._UniswapFactory
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddress(
  call: Set_new_dzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14setnewdzgoodwillAddress(id)
  entity._new_dzgoodwillAddress = call.inputs._new_dzgoodwillAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwill(call: Set_new_goodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14setnewgoodwill(id)
  entity._new_goodwill = call.inputs._new_goodwill
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handlesetuniswapPoolZapAddress(
  call: Set_uniswapPoolZapAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14setuniswapPoolZapAddress(id)
  entity._uniswapPoolZapAddress = call.inputs._uniswapPoolZapAddress
  entity.timestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnership(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV14transferOwnership(id)
  entity.newOwner = call.inputs.newOwner
  entity.timestamp = call.block.timestamp
  entity.save()
}
