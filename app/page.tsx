"use client";
import { Slide } from "react-slideshow-image";

import { apiHelper } from "./utils/api";
import "./globals.css";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  alignItems: "center",
  backgroundSize: "cover",
  display: "flex",
  height: "400px",
  justifyContent: "center",
};

const renderHome = () => {
  const solScan = "https://solscan.io/account/";

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
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
            </div>
          ))}
        </Slide>
        <br />
        <p style={{ textAlign: "center" }}>Sample puzzles</p>
      </div>
    );
  };

  const onClickPlay = async (e: any) => {
    const { id } = e.currentTarget;
    console.log(id)
  };

  return (
    <main id="wrapper">
      <div id="main">
        <div className="inner">
          <header>
            <div className="slideShow">{Slideshow()}</div>
            <h1>This is SinSorry</h1>
            <p>A Systethetic Cryptogram</p>

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
          </header> 
          <section className="tiles">
            <article className="style1">
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <a onClick={onClickPlay}>
                <h2>Magna</h2>
                <div className="content">
                  <p>written in blood (of rebellion)</p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Lorem</h2>
                <div className="content">
                  <p>Need some blind text?</p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Feugiat</h2>
                <div className="content">
                  <p>Fancy that, it just means &quot;adorned&quot; or &quot;embellished&quot;</p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Fortuna</h2>
                <div className="content">
                  <p>Lady Luck herself</p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <img src="images/pic05.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Aliquam</h2>
                <div className="content">
                  <p>Perhaps a touch (of something)</p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <img src="images/pic06.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Vera + Desideria</h2>
                <div className="content">
                  <p>Truthful desires</p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <img src="images/pic07.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ipsum</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <img src="images/pic08.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dolor</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style1">
              <span className="image">
                <img src="images/pic09.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Nullam</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <img src="images/pic10.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ultricies</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <img src="images/pic11.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dictum</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <img src="images/pic12.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Pretium</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default function Page() {
  return renderHome();
}
