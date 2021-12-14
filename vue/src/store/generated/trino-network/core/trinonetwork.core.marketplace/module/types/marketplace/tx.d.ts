import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "trinonetwork.core.marketplace";
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
export interface MsgUpdateNodeResponse {
}
export interface MsgDeleteNode {
    creator: string;
    id: number;
}
export interface MsgDeleteNodeResponse {
}
export declare const MsgCreateNode: {
    encode(message: MsgCreateNode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNode;
    fromJSON(object: any): MsgCreateNode;
    toJSON(message: MsgCreateNode): unknown;
    fromPartial(object: DeepPartial<MsgCreateNode>): MsgCreateNode;
};
export declare const MsgCreateNodeResponse: {
    encode(message: MsgCreateNodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNodeResponse;
    fromJSON(object: any): MsgCreateNodeResponse;
    toJSON(message: MsgCreateNodeResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateNodeResponse>): MsgCreateNodeResponse;
};
export declare const MsgUpdateNode: {
    encode(message: MsgUpdateNode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateNode;
    fromJSON(object: any): MsgUpdateNode;
    toJSON(message: MsgUpdateNode): unknown;
    fromPartial(object: DeepPartial<MsgUpdateNode>): MsgUpdateNode;
};
export declare const MsgUpdateNodeResponse: {
    encode(_: MsgUpdateNodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateNodeResponse;
    fromJSON(_: any): MsgUpdateNodeResponse;
    toJSON(_: MsgUpdateNodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateNodeResponse>): MsgUpdateNodeResponse;
};
export declare const MsgDeleteNode: {
    encode(message: MsgDeleteNode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNode;
    fromJSON(object: any): MsgDeleteNode;
    toJSON(message: MsgDeleteNode): unknown;
    fromPartial(object: DeepPartial<MsgDeleteNode>): MsgDeleteNode;
};
export declare const MsgDeleteNodeResponse: {
    encode(_: MsgDeleteNodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNodeResponse;
    fromJSON(_: any): MsgDeleteNodeResponse;
    toJSON(_: MsgDeleteNodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteNodeResponse>): MsgDeleteNodeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse>;
    UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse>;
    UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse>;
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
