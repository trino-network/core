package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
)

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}

// StakingKeeper is expected keeper for staking module
type StakingKeeper interface {
	Validator(ctx sdk.Context, address sdk.ValAddress) stakingtypes.ValidatorI // get validator by operator address; nil when validator not found
	TotalBondedTokens(sdk.Context) sdk.Int                                     // total bonded tokens within the validator set
	Slash(sdk.Context, sdk.ConsAddress, int64, int64, sdk.Dec)                 // slash the validator and delegators of the validator, specifying offence height, offence power, and slash fraction
	Jail(sdk.Context, sdk.ConsAddress)                                         // jail a validator
	ValidatorsPowerStoreIterator(ctx sdk.Context) sdk.Iterator                 // an iterator for the current validator power store
	MaxValidators(sdk.Context) uint32                                          // MaxValidators returns the maximum amount of bonded validators
	PowerReduction(ctx sdk.Context) (res sdk.Int)
}
