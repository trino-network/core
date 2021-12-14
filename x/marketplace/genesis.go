package marketplace

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/trino-network/core/x/marketplace/keeper"
	"github.com/trino-network/core/x/marketplace/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the node
	for _, elem := range genState.NodeList {
		k.SetNode(ctx, elem)
	}

	// Set node count
	k.SetNodeCount(ctx, genState.NodeCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.NodeList = k.GetAllNode(ctx)
	genesis.NodeCount = k.GetNodeCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
