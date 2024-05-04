"use client";
import { useState } from "react";

export default function Page() {
  const [isGame, setIsGame] = useState(false);

  const renderGame = () => {
    return (
      <>
        {" "}
        <button onClick={() => setIsGame(!isGame)} className="btn btn-primary">
          Not Started
        </button>
      </>
    );
  };

  const renderHome = () => {
    return (
      <div>
        <div className="hero  bg-base-200" style={{ margin: "0 auto", width: "65%" }}>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://copper-far-goat-344.mypinata.cloud/ipfs/QmWzpNdaz8BcyoFkKCu4fiswGBkEM8Nz9jUdWgY82WFivm"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">This is SinSorry</h1>
              <p>A Systethetic Cryptogram</p>
              <p className="py-6">
                Cracking the Code: Solve a Puzzle, Win NFTs and more on Polygon or Solana!
              </p>
              <button onClick={() => setIsGame(!isGame)} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return isGame ? renderGame() : renderHome();
}
