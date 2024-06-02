import { useState } from "react";
import PropTypes from "prop-types";
import { VotingCard } from "./assets/voting-card.jsx";

function App() {
  const [voteCount, setVoteCount] = useState(1);

  function VoterCounterButton({ count }) {
    return (
      <button
        className="bg-black text-white text-xl font-bold uppercase flex h-full justify-center items-center flex-1"
        onClick={() => setVoteCount(count)}
      >
        {count}
      </button>
    );
  }

  VoterCounterButton.propTypes = {
    count: PropTypes.number.isRequired,
  };

  return (
    <main className="w-screen h-screen flex flex-col bg-black p-8 pb-2">
      <div className="h-full w-full flex flex-col gap-8">
        {new Array(voteCount).fill(null).map((_, index) => (
          <VotingCard key={index} />
        ))}
      </div>

      <footer className="flex h-20">
        <VoterCounterButton count={1} />
        <VoterCounterButton count={2} />
        <VoterCounterButton count={3} />
      </footer>
    </main>
  );
}

export default App;
