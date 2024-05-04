export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content container mx-auto ">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Cryptography</a>
        <a className="link link-hover">NFT</a>
        <a className="link link-hover">Tokens</a>
        <a className="link link-hover">Liquidity</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <aside className="items-center grid-flow-col">
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
}
