"use client";

export default function Page() {
  const renderGrid = () => {
    return (
      <div>
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab">
            Metadata
          </a>
          <a role="tab" className="tab tab-active">
            Collection
          </a>
          <a role="tab" className="tab">
            Mint
          </a>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
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
