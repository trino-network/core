/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "trinonetwork.core.marketplace";
const baseMsgCreateNode = {
    creator: "",
    ip: "",
    port: "",
    protocol: "",
    price: "",
    payload: "",
};
export const MsgCreateNode = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNode };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = String(object.ip);
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = String(object.protocol);
        }
        else {
            message.protocol = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = String(object.payload);
        }
        else {
            message.payload = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = message.port);
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.price !== undefined && (obj.price = message.price);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = object.protocol;
        }
        else {
            message.protocol = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = object.payload;
        }
        else {
            message.payload = "";
        }
        return message;
    },
};
const baseMsgCreateNodeResponse = { id: 0 };
export const MsgCreateNodeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNodeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateNodeResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateNodeResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateNode = {
    creator: "",
    id: 0,
    ip: "",
    port: "",
    protocol: "",
    price: "",
    payload: "",
};
export const MsgUpdateNode = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = String(object.ip);
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = String(object.protocol);
        }
        else {
            message.protocol = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = String(object.payload);
        }
        else {
            message.payload = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = message.port);
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.price !== undefined && (obj.price = message.price);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = object.protocol;
        }
        else {
            message.protocol = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = object.payload;
        }
        else {
            message.payload = "";
        }
        return message;
    },
};
const baseMsgUpdateNodeResponse = {};
export const MsgUpdateNodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNodeResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateNodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateNodeResponse };
        return message;
    },
};
const baseMsgDeleteNode = { creator: "", id: 0 };
export const MsgDeleteNode = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteNodeResponse = {};
export const MsgDeleteNodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNodeResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteNodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteNodeResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateNode(request) {
        const data = MsgCreateNode.encode(request).finish();
        const promise = this.rpc.request("trinonetwork.core.marketplace.Msg", "CreateNode", data);
        return promise.then((data) => MsgCreateNodeResponse.decode(new Reader(data)));
    }
    UpdateNode(request) {
        const data = MsgUpdateNode.encode(request).finish();
        const promise = this.rpc.request("trinonetwork.core.marketplace.Msg", "UpdateNode", data);
        return promise.then((data) => MsgUpdateNodeResponse.decode(new Reader(data)));
    }
    DeleteNode(request) {
        const data = MsgDeleteNode.encode(request).finish();
        const promise = this.rpc.request("trinonetwork.core.marketplace.Msg", "DeleteNode", data);
        return promise.then((data) => MsgDeleteNodeResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
