export default function Page() {
  return (
    <div className="flex-col md:flex-row" style={{ margin: "0 auto", width: "65%" }}>
      <p className="prose lg:prose-xl">
        Welcome to a cipher not of letters, but of senses! Systethesia is a neurological condition
        where stimulation in one sense triggers experiences in another. Today, we will explore a
        cryptogram based on aesthetiac synesthesia, where letters and numbers evoke specific colors.
      </p>
      <p className="prose lg:prose-xl">
        Prepare to flex your mental muscles and potentially snag a coveted Solana NFT by conquering
        a cryptic challenge.
      </p>

      <h2 className="text-3xl font-bold">The Challenge</h2>
      <p className="prose lg:prose-xl">
        Here is the lowdown: solve the brain teaser correctly, and you will be the lucky winner of a
        unique NFT on the Solana blockchain based on your puzzle. You will be the sole owner of this
        NFT and it will unlock new features in this website. Once you solve all our puzzles you will
        unlock a hidden wallet containing a percentage of the available supply of our native token
        $SIN-SES. The more you win, the more you get. However, as each winner takes a percentage the
        supply will reduce and the next winner will receive less. In other words, it pays more to
        win fast.
      </p>

      <article className="prose  lg:prose-xl">
        Each game is unique to your wallet and you can play as many times as you like. The puzzles
        will become increasing difficult and the final puzzle will only allow limited guesses before
        locked and unsolvable. If you need to reset the game you can surrender, however, the next
        game will only be available in 24 hours.
      </article>

      <p className="prose lg:prose-xl">
        Below are 12 colored squares, each will contain a unique puzzle created just for you.
      </p>
      <ul>
        <li>Once you start a puzzle the game will be locked until you solve it.</li>
        <li>
          If you solve a puzzle you will receive a NFT, this is your key to unlock the next puzzle.
        </li>
        <li>Once you unlock all 12 puzzles you receive a free stake in our native coin.</li>
      </ul>
    </div>
  );
}
