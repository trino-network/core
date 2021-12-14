package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/trino-network/core/testutil/keeper"
	"github.com/trino-network/core/testutil/nullify"
	"github.com/trino-network/core/x/marketplace/keeper"
	"github.com/trino-network/core/x/marketplace/types"
)

func createNNode(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Node {
	items := make([]types.Node, n)
	for i := range items {
		items[i].Id = keeper.AppendNode(ctx, items[i])
	}
	return items
}

func TestNodeGet(t *testing.T) {
	keeper, ctx := keepertest.MarketplaceKeeper(t)
	items := createNNode(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetNode(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestNodeRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketplaceKeeper(t)
	items := createNNode(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNode(ctx, item.Id)
		_, found := keeper.GetNode(ctx, item.Id)
		require.False(t, found)
	}
}

func TestNodeGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketplaceKeeper(t)
	items := createNNode(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNode(ctx)),
	)
}

func TestNodeCount(t *testing.T) {
	keeper, ctx := keepertest.MarketplaceKeeper(t)
	items := createNNode(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetNodeCount(ctx))
}
