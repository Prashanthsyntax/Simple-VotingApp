import React from "react";
import { useWallet } from "../context/WalletContext";

const Navbar: React.FC = () => {
  const { accountAddress, connectWallet, handleDisconnect } = useWallet();

  return (
    <nav className="flex justify-between items-center bg-gray-900 px-6 py-4 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">🗳 Algorand Voting</h1>

      {accountAddress ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-300">
            {accountAddress.slice(0, 6)}...{accountAddress.slice(-4)}
          </span>
          <button
            onClick={handleDisconnect}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Navbar;
