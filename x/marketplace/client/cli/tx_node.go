package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/trino-network/core/x/marketplace/types"
)

func CmdCreateNode() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-node [ip] [port] [protocol] [price] [payload]",
		Short: "Create a new node",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIp := args[0]
			argPort := args[1]
			argProtocol := args[2]
			argPrice := args[3]
			argPayload := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateNode(clientCtx.GetFromAddress().String(), argIp, argPort, argProtocol, argPrice, argPayload)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateNode() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-node [id] [ip] [port] [protocol] [price] [payload]",
		Short: "Update a node",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argIp := args[1]

			argPort := args[2]

			argProtocol := args[3]

			argPrice := args[4]

			argPayload := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateNode(clientCtx.GetFromAddress().String(), id, argIp, argPort, argProtocol, argPrice, argPayload)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteNode() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-node [id]",
		Short: "Delete a node by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteNode(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
