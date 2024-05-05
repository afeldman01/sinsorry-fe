export default function CaptureMetadata() {
    return (<div className="grid grid-cols-2 gap-4">
    <div>upload an image<br />upload an animation</div>
    
    <div>
    <div className="md:container md:mx-auto">
      <h3>Metadata</h3>
      <p>Your NFT will need on and off chain metadata. Please fill out the info below</p>
    <form className="space-y-4"> 
      <div>
    <label className="input input-bordered flex items-center gap-2"> 
     <div><input type="text" className="grow " placeholder="Name" /> </div> 
    </label>
    </div>
    <div>
    <label className="input input-bordered flex items-center gap-2"> 
     <div><input type="text" className="grow " placeholder="Symbol" /> </div> 
    </label>
    </div>
    <div>
    <label className="flex items-center gap-2"> 
     <div><textarea className="w-full textarea textarea-bordered" placeholder="Description" rows={3} cols={100}></textarea> </div> 
    </label>
    </div>
    <div>
    <label className="input input-bordered flex items-center gap-2"> 
     <div><input type="text" className="grow " placeholder="Website" /> </div> 
    </label>
    </div>
    <div>
    <label className="input input-bordered flex items-center gap-2"> 
     <div><input type="text" className="grow " placeholder="Off chain metadata" /> </div> 
    </label>
    </div>

    </form>
    </div>
    
    </div>
  </div>)
}