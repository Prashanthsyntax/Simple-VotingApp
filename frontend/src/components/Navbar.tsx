export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-6 py-4 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">🗳 Algorand Voting</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Connect Wallet
      </button>
    </nav>
  );
}
