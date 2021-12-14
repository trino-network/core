package keeper

import (
	"github.com/trino-network/core/x/marketplace/types"
)

var _ types.QueryServer = Keeper{}
