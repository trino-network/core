package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/trino-network/core/x/marketplace/types"
)

func (k msgServer) CreateNode(goCtx context.Context, msg *types.MsgCreateNode) (*types.MsgCreateNodeResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	var node = types.Node{
		Creator:  msg.Creator,
		Ip:       msg.Ip,
		Port:     msg.Port,
		Protocol: msg.Protocol,
		Price:    msg.Price,
		Payload:  msg.Payload,
	}

	id := k.AppendNode(
		ctx,
		node,
	)

	return &types.MsgCreateNodeResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateNode(goCtx context.Context, msg *types.MsgUpdateNode) (*types.MsgUpdateNodeResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	var node = types.Node{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Ip:       msg.Ip,
		Port:     msg.Port,
		Protocol: msg.Protocol,
		Price:    msg.Price,
		Payload:  msg.Payload,
	}

	// Checks that the element exists
	val, found := k.GetNode(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetNode(ctx, node)

	return &types.MsgUpdateNodeResponse{}, nil
}

func (k msgServer) DeleteNode(goCtx context.Context, msg *types.MsgDeleteNode) (*types.MsgDeleteNodeResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetNode(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveNode(ctx, msg.Id)

	return &types.MsgDeleteNodeResponse{}, nil
}
