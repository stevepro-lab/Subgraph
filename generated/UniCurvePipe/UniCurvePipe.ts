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

export class UniCurvePipe extends ethereum.SmartContract {
  static bind(address: Address): UniCurvePipe {
    return new UniCurvePipe("UniCurvePipe", address);
  }

  DaiTokenAddress(): Address {
    let result = super.call(
      "DaiTokenAddress",
      "DaiTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_DaiTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "DaiTokenAddress",
      "DaiTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bUSDCurveExchangeAddress(): Address {
    let result = super.call(
      "bUSDCurveExchangeAddress",
      "bUSDCurveExchangeAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_bUSDCurveExchangeAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bUSDCurveExchangeAddress",
      "bUSDCurveExchangeAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bUSDCurvePoolTokenAddress(): Address {
    let result = super.call(
      "bUSDCurvePoolTokenAddress",
      "bUSDCurvePoolTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_bUSDCurvePoolTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bUSDCurvePoolTokenAddress",
      "bUSDCurvePoolTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  curveGenZapIn(): Address {
    let result = super.call("curveGenZapIn", "curveGenZapIn():(address)", []);

    return result[0].toAddress();
  }

  try_curveGenZapIn(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "curveGenZapIn",
      "curveGenZapIn():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  curveGenZapOut(): Address {
    let result = super.call("curveGenZapOut", "curveGenZapOut():(address)", []);

    return result[0].toAddress();
  }

  try_curveGenZapOut(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "curveGenZapOut",
      "curveGenZapOut():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  paxCurveExchangeAddress(): Address {
    let result = super.call(
      "paxCurveExchangeAddress",
      "paxCurveExchangeAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_paxCurveExchangeAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "paxCurveExchangeAddress",
      "paxCurveExchangeAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paxCurvePoolTokenAddress(): Address {
    let result = super.call(
      "paxCurvePoolTokenAddress",
      "paxCurvePoolTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_paxCurvePoolTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "paxCurvePoolTokenAddress",
      "paxCurvePoolTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sUSDCurveExchangeAddress(): Address {
    let result = super.call(
      "sUSDCurveExchangeAddress",
      "sUSDCurveExchangeAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_sUSDCurveExchangeAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sUSDCurveExchangeAddress",
      "sUSDCurveExchangeAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sUSDCurvePoolTokenAddress(): Address {
    let result = super.call(
      "sUSDCurvePoolTokenAddress",
      "sUSDCurvePoolTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_sUSDCurvePoolTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sUSDCurvePoolTokenAddress",
      "sUSDCurvePoolTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapFactory(): Address {
    let result = super.call("uniswapFactory", "uniswapFactory():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapFactory",
      "uniswapFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapPoolZap(): Address {
    let result = super.call("uniswapPoolZap", "uniswapPoolZap():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapPoolZap(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapPoolZap",
      "uniswapPoolZap():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapRemoveLiq(): Address {
    let result = super.call(
      "uniswapRemoveLiq",
      "uniswapRemoveLiq():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_uniswapRemoveLiq(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapRemoveLiq",
      "uniswapRemoveLiq():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  yCurveExchangeAddress(): Address {
    let result = super.call(
      "yCurveExchangeAddress",
      "yCurveExchangeAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_yCurveExchangeAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "yCurveExchangeAddress",
      "yCurveExchangeAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  yCurvePoolTokenAddress(): Address {
    let result = super.call(
      "yCurvePoolTokenAddress",
      "yCurvePoolTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_yCurvePoolTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "yCurvePoolTokenAddress",
      "yCurvePoolTokenAddress():(address)",
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

  get _genCurveZapInAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _curveZapOutAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _uniswapPoolZapAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _uniswapRemoveLiqAddr(): Address {
    return this._call.inputValues[3].value.toAddress();
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

export class Curve2UniCall extends ethereum.Call {
  get inputs(): Curve2UniCall__Inputs {
    return new Curve2UniCall__Inputs(this);
  }

  get outputs(): Curve2UniCall__Outputs {
    return new Curve2UniCall__Outputs(this);
  }
}

export class Curve2UniCall__Inputs {
  _call: Curve2UniCall;

  constructor(call: Curve2UniCall) {
    this._call = call;
  }

  get _toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _incomingCurveExchange(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _IncomingCRV(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _toUniUnderlyingTokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class Curve2UniCall__Outputs {
  _call: Curve2UniCall;

  constructor(call: Curve2UniCall) {
    this._call = call;
  }
}

export class Uni2CurveCall extends ethereum.Call {
  get inputs(): Uni2CurveCall__Inputs {
    return new Uni2CurveCall__Inputs(this);
  }

  get outputs(): Uni2CurveCall__Outputs {
    return new Uni2CurveCall__Outputs(this);
  }
}

export class Uni2CurveCall__Inputs {
  _call: Uni2CurveCall;

  constructor(call: Uni2CurveCall) {
    this._call = call;
  }

  get _toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _incomingUniUnderlyingTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _IncomingLPT(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _toCurveExchange(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class Uni2CurveCall__Outputs {
  _call: Uni2CurveCall;

  constructor(call: Uni2CurveCall) {
    this._call = call;
  }
}

export class ApproveTokenCall extends ethereum.Call {
  get inputs(): ApproveTokenCall__Inputs {
    return new ApproveTokenCall__Inputs(this);
  }

  get outputs(): ApproveTokenCall__Outputs {
    return new ApproveTokenCall__Outputs(this);
  }
}

export class ApproveTokenCall__Inputs {
  _call: ApproveTokenCall;

  constructor(call: ApproveTokenCall) {
    this._call = call;
  }
}

export class ApproveTokenCall__Outputs {
  _call: ApproveTokenCall;

  constructor(call: ApproveTokenCall) {
    this._call = call;
  }
}

export class DestructCall extends ethereum.Call {
  get inputs(): DestructCall__Inputs {
    return new DestructCall__Inputs(this);
  }

  get outputs(): DestructCall__Outputs {
    return new DestructCall__Outputs(this);
  }
}

export class DestructCall__Inputs {
  _call: DestructCall;

  constructor(call: DestructCall) {
    this._call = call;
  }
}

export class DestructCall__Outputs {
  _call: DestructCall;

  constructor(call: DestructCall) {
    this._call = call;
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
