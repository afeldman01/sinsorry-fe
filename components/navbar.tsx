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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/about">About</Link></li>
          {/* <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><Link href="/about"></Link></li>
                <li><Link href="/about"></Link></li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
