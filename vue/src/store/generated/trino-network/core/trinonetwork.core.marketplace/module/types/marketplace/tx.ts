/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "trinonetwork.core.marketplace";

export interface MsgCreateNode {
  creator: string;
  ip: string;
  port: string;
  protocol: string;
  price: string;
  payload: string;
}

export interface MsgCreateNodeResponse {
  id: number;
}

export interface MsgUpdateNode {
  creator: string;
  id: number;
  ip: string;
  port: string;
  protocol: string;
  price: string;
  payload: string;
}

export interface MsgUpdateNodeResponse {}

export interface MsgDeleteNode {
  creator: string;
  id: number;
}

export interface MsgDeleteNodeResponse {}

const baseMsgCreateNode: object = {
  creator: "",
  ip: "",
  port: "",
  protocol: "",
  price: "",
  payload: "",
};

export const MsgCreateNode = {
  encode(message: MsgCreateNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.protocol !== "") {
      writer.uint32(34).string(message.protocol);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.payload !== "") {
      writer.uint32(50).string(message.payload);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNode } as MsgCreateNode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.protocol = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNode {
    const message = { ...baseMsgCreateNode } as MsgCreateNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = String(object.protocol);
    } else {
      message.protocol = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = String(object.payload);
    } else {
      message.payload = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = message.port);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.price !== undefined && (obj.price = message.price);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNode>): MsgCreateNode {
    const message = { ...baseMsgCreateNode } as MsgCreateNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    } else {
      message.protocol = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = "";
    }
    return message;
  },
};

const baseMsgCreateNodeResponse: object = { id: 0 };

export const MsgCreateNodeResponse = {
  encode(
    message: MsgCreateNodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNodeResponse {
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateNodeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateNodeResponse>
  ): MsgCreateNodeResponse {
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateNode: object = {
  creator: "",
  id: 0,
  ip: "",
  port: "",
  protocol: "",
  price: "",
  payload: "",
};

export const MsgUpdateNode = {
  encode(message: MsgUpdateNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.port !== "") {
      writer.uint32(34).string(message.port);
    }
    if (message.protocol !== "") {
      writer.uint32(42).string(message.protocol);
    }
    if (message.price !== "") {
      writer.uint32(50).string(message.price);
    }
    if (message.payload !== "") {
      writer.uint32(58).string(message.payload);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.ip = reader.string();
          break;
        case 4:
          message.port = reader.string();
          break;
        case 5:
          message.protocol = reader.string();
          break;
        case 6:
          message.price = reader.string();
          break;
        case 7:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNode {
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = String(object.protocol);
    } else {
      message.protocol = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = String(object.payload);
    } else {
      message.payload = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = message.port);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.price !== undefined && (obj.price = message.price);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateNode>): MsgUpdateNode {
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    } else {
      message.protocol = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = "";
    }
    return message;
  },
};

const baseMsgUpdateNodeResponse: object = {};

export const MsgUpdateNodeResponse = {
  encode(_: MsgUpdateNodeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateNodeResponse {
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse;
    return message;
  },

  toJSON(_: MsgUpdateNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateNodeResponse>): MsgUpdateNodeResponse {
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse;
    return message;
  },
};

const baseMsgDeleteNode: object = { creator: "", id: 0 };

export const MsgDeleteNode = {
  encode(message: MsgDeleteNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNode {
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteNode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteNode>): MsgDeleteNode {
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteNodeResponse: object = {};

export const MsgDeleteNodeResponse = {
  encode(_: MsgDeleteNodeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteNodeResponse {
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse;
    return message;
  },

  toJSON(_: MsgDeleteNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteNodeResponse>): MsgDeleteNodeResponse {
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse>;
  UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse> {
    const data = MsgCreateNode.encode(request).finish();
    const promise = this.rpc.request(
      "trinonetwork.core.marketplace.Msg",
      "CreateNode",
      data
    );
    return promise.then((data) =>
      MsgCreateNodeResponse.decode(new Reader(data))
    );
  }

  UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse> {
    const data = MsgUpdateNode.encode(request).finish();
    const promise = this.rpc.request(
      "trinonetwork.core.marketplace.Msg",
      "UpdateNode",
      data
    );
    return promise.then((data) =>
      MsgUpdateNodeResponse.decode(new Reader(data))
    );
  }

  DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse> {
    const data = MsgDeleteNode.encode(request).finish();
    const promise = this.rpc.request(
      "trinonetwork.core.marketplace.Msg",
      "DeleteNode",
      data
    );
    return promise.then((data) =>
      MsgDeleteNodeResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
