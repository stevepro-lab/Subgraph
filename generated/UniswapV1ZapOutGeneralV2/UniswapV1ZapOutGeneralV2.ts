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

export class details extends ethereum.Event {
  get params(): details__Params {
    return new details__Params(this);
  }
}

export class details__Params {
  _event: details;

  constructor(event: details) {
    this._event = event;
  }

  get ExchangeAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get TokenAdddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get LiqRed(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get ethRec(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tokenRec(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get func(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class UniswapV1ZapOutGeneralV2 extends ethereum.SmartContract {
  static bind(address: Address): UniswapV1ZapOutGeneralV2 {
    return new UniswapV1ZapOutGeneralV2("UniswapV1ZapOutGeneralV2", address);
  }

  _owner(): Address {
    let result = super.call("_owner", "_owner():(address)", []);

    return result[0].toAddress();
  }

  try__owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("_owner", "_owner():(address)", []);
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

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

export class LetsWithdraw_onlyERCCall extends ethereum.Call {
  get inputs(): LetsWithdraw_onlyERCCall__Inputs {
    return new LetsWithdraw_onlyERCCall__Inputs(this);
  }

  get outputs(): LetsWithdraw_onlyERCCall__Outputs {
    return new LetsWithdraw_onlyERCCall__Outputs(this);
  }
}

export class LetsWithdraw_onlyERCCall__Inputs {
  _call: LetsWithdraw_onlyERCCall;

  constructor(call: LetsWithdraw_onlyERCCall) {
    this._call = call;
  }

  get _TokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get LiquidityTokenSold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minTokensRec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _returnInDai(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class LetsWithdraw_onlyERCCall__Outputs {
  _call: LetsWithdraw_onlyERCCall;

  constructor(call: LetsWithdraw_onlyERCCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class LetsWithdraw_onlyETHCall extends ethereum.Call {
  get inputs(): LetsWithdraw_onlyETHCall__Inputs {
    return new LetsWithdraw_onlyETHCall__Inputs(this);
  }

  get outputs(): LetsWithdraw_onlyETHCall__Outputs {
    return new LetsWithdraw_onlyETHCall__Outputs(this);
  }
}

export class LetsWithdraw_onlyETHCall__Inputs {
  _call: LetsWithdraw_onlyETHCall;

  constructor(call: LetsWithdraw_onlyETHCall) {
    this._call = call;
  }

  get _TokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get LiquidityTokenSold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minEthRec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class LetsWithdraw_onlyETHCall__Outputs {
  _call: LetsWithdraw_onlyETHCall;

  constructor(call: LetsWithdraw_onlyETHCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InCaseTokengetsStuckCall extends ethereum.Call {
  get inputs(): InCaseTokengetsStuckCall__Inputs {
    return new InCaseTokengetsStuckCall__Inputs(this);
  }

  get outputs(): InCaseTokengetsStuckCall__Outputs {
    return new InCaseTokengetsStuckCall__Outputs(this);
  }
}

export class InCaseTokengetsStuckCall__Inputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }

  get _TokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InCaseTokengetsStuckCall__Outputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
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

export class ToggleContractActiveCall extends ethereum.Call {
  get inputs(): ToggleContractActiveCall__Inputs {
    return new ToggleContractActiveCall__Inputs(this);
  }

  get outputs(): ToggleContractActiveCall__Outputs {
    return new ToggleContractActiveCall__Outputs(this);
  }
}

export class ToggleContractActiveCall__Inputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall__Outputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
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

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
