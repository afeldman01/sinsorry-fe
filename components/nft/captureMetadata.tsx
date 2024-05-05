"use client";

import { useEffect, useState } from "react";

export default function CaptureMetadata() {
  const [data, setData] = useState([0]);

 

  const renderOptions = () => {
    const options = data.map(item => {
      return <option>{item}</option>;
    });
    return options;
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <div className="md:container md:mx-auto">
          <h3>Metadata</h3>
          <p>Your NFT will need on and off chain metadata. Please fill out the info below</p>
          <form className="space-y-4">
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

            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow " placeholder="Name" />{" "}
                </div>
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow " placeholder="Symbol" />{" "}
                </div>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <div>
                  <textarea
                    className="w-full textarea textarea-bordered"
                    placeholder="Description"
                    rows={3}
                    cols={100}
                  ></textarea>{" "}
                </div>
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow " placeholder="Website" />{" "}
                </div>
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <div>
                  <input type="text" className="grow " placeholder="Off chain metadata" />{" "}
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
