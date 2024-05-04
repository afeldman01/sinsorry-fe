import { Menu } from "./menu";

export default function Navbar() {
  const menuItems = [
    { href: "/networks", name: "networks" },
    { href: "/rewards", name: "rewards" },
    { href: "/about", name: "about" },
    { href: "/admin", name: "nft generator" },
  ];

  return (
    <header id="header">
      <div className="inner">
        <Menu items={menuItems} />
      </div>
    </header>
  );
}
