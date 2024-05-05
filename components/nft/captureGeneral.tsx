export default function CaptureGeneral() {
  return (
    <div className="grid grid-cols-1 gap-4">
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
              <option selected>Solana devnet</option>
              <option>Solana testnet</option>
            </select>

            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow " placeholder="Mint owner address" />
                </div>
              </label>
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow" placeholder="Creator address" />
                </div>
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow" placeholder="Creator percentage" />
                </div>
              </label>
            </div>

            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Seller Fee Basis Points
              </option>
              <option>1%</option>
              <option>1.5%</option>
              <option>2%</option>
              <option>2.5%</option>
              <option>3%</option>
              <option>3.5%</option>
              <option>4%</option>
              <option>4.5%</option>
              <option>5%</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
