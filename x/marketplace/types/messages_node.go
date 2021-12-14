package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateNode = "create_node"
	TypeMsgUpdateNode = "update_node"
	TypeMsgDeleteNode = "delete_node"
)

var _ sdk.Msg = &MsgCreateNode{}

func NewMsgCreateNode(creator string, ip string, port string, protocol string, price string, payload string) *MsgCreateNode {
	return &MsgCreateNode{
		Creator:  creator,
		Ip:       ip,
		Port:     port,
		Protocol: protocol,
		Price:    price,
		Payload:  payload,
	}
}

func (msg *MsgCreateNode) Route() string {
	return RouterKey
}

func (msg *MsgCreateNode) Type() string {
	return TypeMsgCreateNode
}

func (msg *MsgCreateNode) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNode) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.NewDecFromStr(msg.Price)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "invalid price (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgUpdateNode{}

func NewMsgUpdateNode(creator string, id uint64, ip string, port string, protocol string, price string, payload string) *MsgUpdateNode {
	return &MsgUpdateNode{
		Id:       id,
		Creator:  creator,
		Ip:       ip,
		Port:     port,
		Protocol: protocol,
		Price:    price,
		Payload:  payload,
	}
}

func (msg *MsgUpdateNode) Route() string {
	return RouterKey
}

func (msg *MsgUpdateNode) Type() string {
	return TypeMsgUpdateNode
}

func (msg *MsgUpdateNode) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateNode) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.NewDecFromStr(msg.Price)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "invalid price (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgDeleteNode{}

func NewMsgDeleteNode(creator string, id uint64) *MsgDeleteNode {
	return &MsgDeleteNode{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteNode) Route() string {
	return RouterKey
}

func (msg *MsgDeleteNode) Type() string {
	return TypeMsgDeleteNode
}

func (msg *MsgDeleteNode) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteNode) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
