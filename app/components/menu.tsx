export const Menu = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          <span className="symbol">
            <img style={{ height: 30, width: 30 }} src="images/logo.jpeg" alt="" />
          </span>
          <span className="title">SinSorry</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a href="/admin">NFT Generator</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
