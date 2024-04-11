'use client'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Wallet } from './components/wallet';
const spanStyle = {
  padding: '0px',
  background: 'transparent',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80', 
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
             
            </div>
          </div>
        ))} 
      </Slide>
      <br />
      <p style={{ textAlign: 'center'}}>Past winners</p>
    </div>
  )
}

export default function Home() {
  return (
    <body>
    <main id="wrapper">
 
      <header id="header">
        <div className="inner">
 
            <a href="/" className="logo">
              <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">SinSorry</span>
            </a>
            <div className='wallet' suppressHydrationWarning={true}>
            <Wallet />
            </div>
        </div>
      </header>
 
 
      <div id="main">
        <div className="inner">
        <div className='slideShow'>
              { Slideshow() }
            </div>
          <header>

            <h1>This is SinSorry</h1>
            <p>A Systethetic Cryptogram</p> 
            
            <h2>Cracking the Code: Solve a Puzzle, Win an NFT on Solana!</h2> 
            <p>
Welcome to a cipher not of letters, but of senses! Systethesia is a neurological condition where stimulation in one sense triggers experiences in another. Today, we will explore a cryptogram based on aesthetiac synesthesia, where letters and numbers evoke specific colors.
</p>
<p>
Prepare to flex your mental muscles and potentially snag a coveted Solana NFT by conquering a cryptic challenge. Here is the lowdown:
</p>

<h2>The Challenge</h2>
<p>
Solve the brain teaser correctly, and you will be the lucky winner of a unique NFT on the Solana blockchain based on your puzzle. You will be the sole owner of this NFT and it will unlock new features in this website.</p>
 
<p>Below are 12 colored squares, each will contain a unique puzzle created just for you.</p>
<p>Here is the gist of it: </p>
  <ul>
    <li>Once you start a puzzle the game will be locked until you solve it.</li>
    <li>If you solve a puzzle you will receive a NFT, this is your key to unlock the next puzzle.</li>
    <li>Once you unlock all 12 puzzles you receive a special prize.</li>
    </ul> 

          </header>
          <section className="tiles">
            <article className="style1">
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Magna</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Tempus</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <img src="images/pic06.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Veroeros</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
 
      <footer id="footer">
        <div className="inner"> 
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved</li><li><a href="http://sinsorry.com">sinsorry.com</a></li>
          </ul>
        </div>
      </footer>

  </main>
  
  </body>
  );
}
