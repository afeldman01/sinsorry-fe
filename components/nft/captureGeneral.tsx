export default function CaptureGeneral() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="md:container md:mx-auto">
          <h3>General info</h3>
          <p>Define some details about how you want to generate your nfts.</p>
          <form className="space-y-4">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Network
              </option>
              <option>Ethereum</option>
              <option>Goerli</option>
              <option>Polygon</option>
              <option>Mumbai</option>
              <option>Solana</option>
              <option>Solana devnet</option>
              <option>Solana testnet</option>
            </select>

            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Type of NFT
              </option>
              <option>Single</option>
              <option>Limited Edition</option>
              <option>Mutable Edition</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
