package marketplace

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/trino-network/core/testutil/sample"
	marketplacesimulation "github.com/trino-network/core/x/marketplace/simulation"
	"github.com/trino-network/core/x/marketplace/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marketplacesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateNode = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateNode int = 100

	opWeightMsgUpdateNode = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateNode int = 100

	opWeightMsgDeleteNode = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteNode int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marketplaceGenesis := types.GenesisState{
		NodeList: []types.Node{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		NodeCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marketplaceGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateNode int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateNode, &weightMsgCreateNode, nil,
		func(_ *rand.Rand) {
			weightMsgCreateNode = defaultWeightMsgCreateNode
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateNode,
		marketplacesimulation.SimulateMsgCreateNode(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateNode int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateNode, &weightMsgUpdateNode, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateNode = defaultWeightMsgUpdateNode
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateNode,
		marketplacesimulation.SimulateMsgUpdateNode(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteNode int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteNode, &weightMsgDeleteNode, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteNode = defaultWeightMsgDeleteNode
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteNode,
		marketplacesimulation.SimulateMsgDeleteNode(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
