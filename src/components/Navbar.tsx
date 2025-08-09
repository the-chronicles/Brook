function Navbar() {
  return (
    <header className="">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <a href="/">
            <img src="/Logo.png" alt="logo" className="w-32" />
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/integration">Integrations</a>
          <a href="/pricing">Pricing</a>
          <a href="contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="">Log in</a>
          <a
            href=""
            className="rounded-xl bg-[#335CFF] px-3.5 py-2 font-medium text-white "
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
