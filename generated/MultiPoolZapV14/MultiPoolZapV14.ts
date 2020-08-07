// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MultiPoolZapV14 extends ethereum.SmartContract {
  static bind(address: Address): MultiPoolZapV14 {
    return new MultiPoolZapV14("MultiPoolZapV14", address);
  }

  UniswapFactory(): Address {
    let result = super.call("UniswapFactory", "UniswapFactory():(address)", []);

    return result[0].toAddress();
  }

  try_UniswapFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "UniswapFactory",
      "UniswapFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dzgoodwillAddress(): Address {
    let result = super.call(
      "dzgoodwillAddress",
      "dzgoodwillAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_dzgoodwillAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "dzgoodwillAddress",
      "dzgoodwillAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  goodwill(): i32 {
    let result = super.call("goodwill", "goodwill():(uint16)", []);

    return result[0].toI32();
  }

  try_goodwill(): ethereum.CallResult<i32> {
    let result = super.tryCall("goodwill", "goodwill():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapPoolZapAddress(): Address {
    let result = super.call(
      "uniswapPoolZapAddress",
      "uniswapPoolZapAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_uniswapPoolZapAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapPoolZapAddress",
      "uniswapPoolZapAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _goodwill(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _dzgoodwillAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class MultipleZapInCall extends ethereum.Call {
  get inputs(): MultipleZapInCall__Inputs {
    return new MultipleZapInCall__Inputs(this);
  }

  get outputs(): MultipleZapInCall__Outputs {
    return new MultipleZapInCall__Outputs(this);
  }
}

export class MultipleZapInCall__Inputs {
  _call: MultipleZapInCall;

  constructor(call: MultipleZapInCall) {
    this._call = call;
  }

  get _IncomingTokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _IncomingTokenQty(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get underlyingTokenAddresses(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get respectiveWeightedValues(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class MultipleZapInCall__Outputs {
  _call: MultipleZapInCall;

  constructor(call: MultipleZapInCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class Set_UniswapFactoryCall extends ethereum.Call {
  get inputs(): Set_UniswapFactoryCall__Inputs {
    return new Set_UniswapFactoryCall__Inputs(this);
  }

  get outputs(): Set_UniswapFactoryCall__Outputs {
    return new Set_UniswapFactoryCall__Outputs(this);
  }
}

export class Set_UniswapFactoryCall__Inputs {
  _call: Set_UniswapFactoryCall;

  constructor(call: Set_UniswapFactoryCall) {
    this._call = call;
  }

  get _UniswapFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Set_UniswapFactoryCall__Outputs {
  _call: Set_UniswapFactoryCall;

  constructor(call: Set_UniswapFactoryCall) {
    this._call = call;
  }
}

export class Set_new_dzgoodwillAddressCall extends ethereum.Call {
  get inputs(): Set_new_dzgoodwillAddressCall__Inputs {
    return new Set_new_dzgoodwillAddressCall__Inputs(this);
  }

  get outputs(): Set_new_dzgoodwillAddressCall__Outputs {
    return new Set_new_dzgoodwillAddressCall__Outputs(this);
  }
}

export class Set_new_dzgoodwillAddressCall__Inputs {
  _call: Set_new_dzgoodwillAddressCall;

  constructor(call: Set_new_dzgoodwillAddressCall) {
    this._call = call;
  }

  get _new_dzgoodwillAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Set_new_dzgoodwillAddressCall__Outputs {
  _call: Set_new_dzgoodwillAddressCall;

  constructor(call: Set_new_dzgoodwillAddressCall) {
    this._call = call;
  }
}

export class Set_new_goodwillCall extends ethereum.Call {
  get inputs(): Set_new_goodwillCall__Inputs {
    return new Set_new_goodwillCall__Inputs(this);
  }

  get outputs(): Set_new_goodwillCall__Outputs {
    return new Set_new_goodwillCall__Outputs(this);
  }
}

export class Set_new_goodwillCall__Inputs {
  _call: Set_new_goodwillCall;

  constructor(call: Set_new_goodwillCall) {
    this._call = call;
  }

  get _new_goodwill(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class Set_new_goodwillCall__Outputs {
  _call: Set_new_goodwillCall;

  constructor(call: Set_new_goodwillCall) {
    this._call = call;
  }
}

export class Set_uniswapPoolZapAddressCall extends ethereum.Call {
  get inputs(): Set_uniswapPoolZapAddressCall__Inputs {
    return new Set_uniswapPoolZapAddressCall__Inputs(this);
  }

  get outputs(): Set_uniswapPoolZapAddressCall__Outputs {
    return new Set_uniswapPoolZapAddressCall__Outputs(this);
  }
}

export class Set_uniswapPoolZapAddressCall__Inputs {
  _call: Set_uniswapPoolZapAddressCall;

  constructor(call: Set_uniswapPoolZapAddressCall) {
    this._call = call;
  }

  get _uniswapPoolZapAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Set_uniswapPoolZapAddressCall__Outputs {
  _call: Set_uniswapPoolZapAddressCall;

  constructor(call: Set_uniswapPoolZapAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}