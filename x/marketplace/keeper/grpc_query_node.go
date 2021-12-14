package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/trino-network/core/x/marketplace/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NodeAll(c context.Context, req *types.QueryAllNodeRequest) (*types.QueryAllNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nodes []types.Node
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	nodeStore := prefix.NewStore(store, types.KeyPrefix(types.NodeKey))

	pageRes, err := query.Paginate(nodeStore, req.Pagination, func(key []byte, value []byte) error {
		var node types.Node
		if err := k.cdc.Unmarshal(value, &node); err != nil {
			return err
		}

		nodes = append(nodes, node)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNodeResponse{Node: nodes, Pagination: pageRes}, nil
}

func (k Keeper) Node(c context.Context, req *types.QueryGetNodeRequest) (*types.QueryGetNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	node, found := k.GetNode(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetNodeResponse{Node: node}, nil
}
