package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/trino-network/core/x/marketplace/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				NodeList: []types.Node{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				NodeCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated node",
			genState: &types.GenesisState{
				NodeList: []types.Node{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid node count",
			genState: &types.GenesisState{
				NodeList: []types.Node{
					{
						Id: 1,
					},
				},
				NodeCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
