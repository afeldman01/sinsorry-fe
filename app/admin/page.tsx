"use client";

import CaptureCollection from "@/components/nft/captureCollection";
import CaptureGeneral from "@/components/nft/captureGeneral";
import CaptureMetadata from "@/components/nft/captureMetadata";
import { useState } from "react";

export default function Page() {
  const [selected, setSelectedTab] = useState(3)
  const renderGrid = () => {
    return (
      <div>
        <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className={`tab ${selected == 3 ? 'tab-active' : ''}`} onClick={() => setSelectedTab(3)}>
            General
          </a>
        <a role="tab" className={`tab ${selected == 1 ? 'tab-active' : ''}`} onClick={() => setSelectedTab(1)}>
            Collection
          </a>
          <a role="tab" className={`tab ${selected == 0 ? 'tab-active' : ''}`} onClick={() => setSelectedTab(0)}>
            Metadata
          </a> 
          <a role="tab" className={`tab ${selected == 2 ? 'tab-active' : ''}`} onClick={() => setSelectedTab(2)}>
            Mint
          </a>
        </div>
        {/* metadata */}
        <div className={`container mx-auto ${selected == 0 ? '' : 'hidden'}`}>
          <CaptureMetadata />
          
        </div>
         {/* collection */}
         <div className={`container mx-auto ${selected == 1 ? '' : 'hidden'}`}>
          <CaptureCollection />
          </div>
         {/* mint */}
         <div className={`container mx-auto ${selected == 2 ? '' : 'hidden'}`}>
          mint
          </div>

           {/* general */}
         <div className={`container mx-auto ${selected == 3 ? '' : 'hidden'}`}>
          <CaptureGeneral />
          </div>
        {/* <Typography variant="h3" gutterBottom textAlign={"left"}>
              Create a NFT
            </Typography>
            <Typography variant="body1" gutterBottom textAlign={"left"}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
              cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>

            <FormControl fullWidth={true}>
              <FormLabel>Name</FormLabel>
              <TextField fullWidth={true}></TextField>
              <FormLabel>Description</FormLabel>
              <TextField></TextField>
              <FormLabel>Website</FormLabel>
              <TextField></TextField>
              <FormLabel>NFT type</FormLabel>
              <NftType></NftType>
              <FormLabel>Royalties</FormLabel>
              <TextField></TextField>
              <Button>Next</Button>
            </FormControl> */}
      </div>
    );
  };

  const renderPage = () => {
    return <div style={{ margin: "0 auto", width: "65%" }}>{renderGrid()}</div>;
  };

  return renderPage();
}
