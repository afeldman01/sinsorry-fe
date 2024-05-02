import { Menu } from "./menu";

export default function Navbar({ children }: any) {
  const menuItems = [
    { href: "/networks", name: "networks" },
    { href: "/rewards", name: "rewards" },
    { href: "/about", name: "about" },
    { href: "/admin", name: "nft generator" },
  ];

  return (
    <header id="header">
      <div className="inner">
        <a href="/" className="logo">
          <span className="symbol">
            <img style={{ height: 30, width: 30 }} src="images/logo.jpeg" alt="" />
          </span>
          <span className="title">SinSorry</span>
        </a>
        <Menu items={menuItems} />
      </div>
    </header>
  );
}
