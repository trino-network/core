import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "trinonetwork.core.marketplace";
export interface Node {
    id: number;
    ip: string;
    port: string;
    protocol: string;
    price: string;
    payload: string;
    creator: string;
}
export declare const Node: {
    encode(message: Node, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: DeepPartial<Node>): Node;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
