"use client";
import { useEffect, useState } from "react";

export default function CaptureMint() {
  const [data, setData] = useState([] as number[]);

  useEffect(() => {
    if(!data.length){ 
        const maxExponent = 15;
        const exponents = [];
        for (let currentExponent = 0; currentExponent < maxExponent; currentExponent++) {
        exponents.push(Math.pow(2, currentExponent));
        }
        console.log(exponents);
        setData(exponents);
    }
  }, []);

  const renderOptions = () => {
    const options = data.map(item => {
      return <option>{item}</option>;
    });
    return options;
  };

  const startMint = (event: any) => {
    console.log(event.target.id);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3>Mint info summary</h3>
        <br />
        <p>
          Network: Solana Devnet
          <br />
          Mint owner: <br />
          Creators: <br />
          Seller fee basis points: 3%
          <br />
        </p>
        <br />
        <p>
          Collection
          <br />
          Name: Some Name
          <br />
          Description: <br />
          Website: <br />
        </p>
      </div>
      <div>
        <div className="md:container md:mx-auto">
          <form className="space-y-4">
            How many to mint?
            <br />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Type of NFT
              </option>
              <option>Single</option>
              <option>Limited Edition</option>
              <option>Mutable Edition</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Max NFT in Collection
              </option>
              {renderOptions()}
            </select>
            <br /> <br />
            NFT Generation
            <br />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select
              </option>
              <option>Same image</option>
              <option>Different images</option>
            </select>
            <br /> <br />
            Attributes
            <br />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <br /> <br />
            Auto generate images and attributes?
            <br />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </form>
        </div>
        <div className="md:container md:mx-auto" style={{ textAlign: "right" }}>
          <div>
            <button onClick={startMint} className="btn btn-primary">
              Start Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
