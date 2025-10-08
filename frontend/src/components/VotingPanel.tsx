export default function VotingPanel() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-blue-900 rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Cast Your Vote</h2>

      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-blue-400 mb-1">Candidate:</span>
          <select className="p-2 bg-gray-800 rounded-lg text-white">
            <option>Candidate A</option>
            <option>Candidate B</option>
            <option>Candidate C</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 mt-2"
        >
          Submit Vote
        </button>
      </form>
    </div>
  );
}
