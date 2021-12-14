// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateNode } from "./types/marketplace/tx";
import { MsgUpdateNode } from "./types/marketplace/tx";
import { MsgDeleteNode } from "./types/marketplace/tx";
const types = [
    ["/trinonetwork.core.marketplace.MsgCreateNode", MsgCreateNode],
    ["/trinonetwork.core.marketplace.MsgUpdateNode", MsgUpdateNode],
    ["/trinonetwork.core.marketplace.MsgDeleteNode", MsgDeleteNode],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateNode: (data) => ({ typeUrl: "/trinonetwork.core.marketplace.MsgCreateNode", value: MsgCreateNode.fromPartial(data) }),
        msgUpdateNode: (data) => ({ typeUrl: "/trinonetwork.core.marketplace.MsgUpdateNode", value: MsgUpdateNode.fromPartial(data) }),
        msgDeleteNode: (data) => ({ typeUrl: "/trinonetwork.core.marketplace.MsgDeleteNode", value: MsgDeleteNode.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
