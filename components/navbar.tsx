import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <aside className="items-center grid-flow-col">
            <div className="btn btn-ghost  avatar">
              <div className="w-10 ">
                <img src="images/logo.jpeg" alt="" />
              </div>
              <p className="text-xl">SinSorry</p>
            </div>
          </aside>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/about">Play the Game</a>
          </li>

          <li>
            <a href="/admin">NFT</a>
          </li>
          <li>
            <a>Tokens</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Connect Wallet</a>
      </div>
    </div>
  );
}
