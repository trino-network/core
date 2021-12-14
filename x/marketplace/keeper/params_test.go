package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/trino-network/core/testutil/keeper"
	"github.com/trino-network/core/x/marketplace/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MarketplaceKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
