"use client";


const divStyle = {
  alignItems: "center",
  backgroundSize: "cover",
  display: "flex",
  height: "400px",
  justifyContent: "center",
};

const renderHome = () => {
  const slideImages = [
    {
      url: "https://copper-far-goat-344.mypinata.cloud/ipfs/QmWzpNdaz8BcyoFkKCu4fiswGBkEM8Nz9jUdWgY82WFivm",
    },
    {
      url: "https://copper-far-goat-344.mypinata.cloud/ipfs/QmPboUrbpk83T1QHSDmfeJo3s1LT8DQ4V9D5sBoeNPMEK9",
    },
    {
      url: "https://copper-far-goat-344.mypinata.cloud/ipfs/QmYbBa4hJxKu9cEGDtPy44ernVLFVysVrxnhjGSB8Mtqo2",
    },
  ];


  function Slideshow() {
    return (
      <div >
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          {slideImages.map((slideImage, index) => (
            <div className="carousel-item w-full" key={index}>
              <img src={slideImage.url} />
            </div>
          ))}
        </div>
        <br />
        <p>Sample puzzles</p>
      </div>
    );
  };

  return (
      <div id="main">
        <div className="inner">
          <header>
            <article className="max-w-md md:max-w-none prose mx-auto lg:prose-xl px-4 mt-10">
              <h1>This is SinSorry</h1>
              <p>A Systethetic Cryptogram</p>
            <div className="text-center">
            <Slideshow />
            </div>
              <h2>Cracking the Code: Solve a Puzzle, Win NFTs and more on Solana!</h2>
              <p>
                Welcome to a cipher not of letters, but of senses! Systethesia is a neurological
                condition where stimulation in one sense triggers experiences in another. Today, we
                will explore a cryptogram based on aesthetiac synesthesia, where letters and numbers
                evoke specific colors.
              </p>
              <p>
                Prepare to flex your mental muscles and potentially snag a coveted Solana NFT by
                conquering a cryptic challenge.
              </p>

              <h2>The Challenge</h2>
              <p>
                Here is the lowdown: solve the brain teaser correctly, and you will be the lucky
                winner of a unique NFT on the Solana blockchain based on your puzzle. You will be the
                sole owner of this NFT and it will unlock new features in this website. Once you solve
                all our puzzles you will unlock a hidden wallet containing a percentage of the
                available supply of our native token $SIN-SES. The more you win, the more you get.
                However, as each winner takes a percentage the supply will reduce and the next winner
                will receive less. In other words, it pays more to win fast.
              </p>

              <p>
                Each game is unique to your wallet and you can play as many times as you like. The
                puzzles will become increasing difficult and the final puzzle will only allow limited
                guesses before locked and unsolvable. If you need to reset the game you can surrender,
                however, the next game will only be available in 24 hours.
              </p>

              <p>
                Below are 12 colored squares, each will contain a unique puzzle created just for you.
              </p>
              <ul>
                <li>Once you start a puzzle the game will be locked until you solve it.</li>
                <li>
                  If you solve a puzzle you will receive a NFT, this is your key to unlock the next
                  puzzle.
                </li>
                <li>Once you unlock all 12 puzzles you receive a free stake in our native coin.</li>
              </ul>
            </article>

          </header>

        </div>
      </div>
  );
};

export default function Page() {
  return renderHome();
}
