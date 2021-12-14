package marketplace_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/trino-network/core/testutil/keeper"
	"github.com/trino-network/core/testutil/nullify"
	"github.com/trino-network/core/x/marketplace"
	"github.com/trino-network/core/x/marketplace/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		NodeList: []types.Node{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		NodeCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketplaceKeeper(t)
	marketplace.InitGenesis(ctx, *k, genesisState)
	got := marketplace.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.NodeList, got.NodeList)
	require.Equal(t, genesisState.NodeCount, got.NodeCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
