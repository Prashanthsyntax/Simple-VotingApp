import React, { createContext, useContext, useState, type ReactNode } from "react";
import { PeraWalletConnect } from "@perawallet/connect";

interface WalletContextType {
  accountAddress: string | null;
  connectWallet: () => Promise<void>;
  handleDisconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);
const peraWallet = new PeraWalletConnect();

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      peraWallet.connector?.on("disconnect", handleDisconnect);
      setAccountAddress(accounts[0]);
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  const handleDisconnect = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  return (
    <WalletContext.Provider value={{ accountAddress, connectWallet, handleDisconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within a WalletProvider");
  return context;
};
