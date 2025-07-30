function Navbar() {
  return (
    <nav className="px-28 py-5 container items-center justify-center flex">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <a href="/">
            <img src="/Logo.png" alt="logo" className="w-32" />
          </a>
        </div>

        <ul className="flex justify-center gap-7 items-center">
          <li>
            <a href="/integration">Integrations</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-7">
          <div>Log In</div>
          <a href="" className="rounded-xl bg-[#335CFF] px-3 py-2 text-white">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
