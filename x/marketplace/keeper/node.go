package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/trino-network/core/x/marketplace/types"
)

// GetNodeCount get the total number of node
func (k Keeper) GetNodeCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.NodeCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetNodeCount set the total number of node
func (k Keeper) SetNodeCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.NodeCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendNode appends a node in the store with a new id and update the count
func (k Keeper) AppendNode(
	ctx sdk.Context,
	node types.Node,
) uint64 {
	// Create the node
	count := k.GetNodeCount(ctx)

	// Set the ID of the appended value
	node.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NodeKey))
	appendedValue := k.cdc.MustMarshal(&node)
	store.Set(GetNodeIDBytes(node.Id), appendedValue)

	// Update node count
	k.SetNodeCount(ctx, count+1)

	return count
}

// SetNode set a specific node in the store
func (k Keeper) SetNode(ctx sdk.Context, node types.Node) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NodeKey))
	b := k.cdc.MustMarshal(&node)
	store.Set(GetNodeIDBytes(node.Id), b)
}

// GetNode returns a node from its id
func (k Keeper) GetNode(ctx sdk.Context, id uint64) (val types.Node, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NodeKey))
	b := store.Get(GetNodeIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNode removes a node from the store
func (k Keeper) RemoveNode(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NodeKey))
	store.Delete(GetNodeIDBytes(id))
}

// GetAllNode returns all node
func (k Keeper) GetAllNode(ctx sdk.Context) (list []types.Node) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NodeKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Node
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetNodeIDBytes returns the byte representation of the ID
func GetNodeIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetNodeIDFromBytes returns ID in uint64 format from a byte array
func GetNodeIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
