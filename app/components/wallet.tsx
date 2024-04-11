import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, useMemo } from "react";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const ShowPublicKey = (args: any) => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();
  args.sendKey(publicKey, wallet);
  return <></>;
};

export const Wallet: FC = (args: any) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      /**
       * Wallets that implement either of these standards will be available automatically.
       *
       *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
       *     (https://github.com/solana-mobile/mobile-wallet-adapter)
       *   - Solana Wallet Standard
       *     (https://github.com/anza-xyz/wallet-standard)
       *
       * If you wish to support a wallet that supports neither of those standards,
       * instantiate its legacy wallet adapter here. Common legacy adapters can be found
       * in the npm package `@solana/wallet-adapter-wallets`.
       */
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <ShowPublicKey sendKey={args.sendKey} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
