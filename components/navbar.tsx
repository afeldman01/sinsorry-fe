import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
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
            <Link href="/about">Play the Game</Link>
          </li>

          <li>
            <Link href="/admin">NFT</Link>
          </li>
          <li>
            <a className="disabled">Tokens</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Connect Wallet</a>
      </div>
    </div>
  );
}
