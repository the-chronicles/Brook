function Footer() {
  return (
    <>
      <footer>
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl bg-[#171717] px-6 py-20 text-center space-y-3 text-white md:px-10">
              <p className="mx-auto max-w-2xl justify-center flex items-center gap-3 text-[13px] tracking-widest text-slate-300">
                <span>
                  <img src="/Subtitle Icon.png" alt="sub" className="w-5" />
                </span>
                LONNAR IS IMPROVING YOUR FINANCES WITH AI •
                <span className="rounded-full items-center inline-flex bg-[#335CFF] px-2 py-1 font-medium text-white">
                  Learn more
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </p>
              <h3 className="mt-2 text-3xl font-semibold md:text-4xl">
                Ready to Grow Your Business?
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-xl font-light text-slate-300">
                Apply for a business loan today and get the funding you need to
                take your business to the next level.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href=""
                  className="rounded-xl bg-[#335CFF] px-4 py-2  font-medium text-white "
                >
                  Contact sales
                </a>
                <a
                  href=""
                  className="group inline-flex items-center gap-2 rounded-md  px-4 py-2"
                >
                  Learn more
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-6 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                  <img src="/lonnar.png" alt="lonnar" className="w-32" />
                </div>
              </div>

              <div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="/integration" className="hover:text-slate-900">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="hover:text-slate-900">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-slate-900">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Legal
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-slate-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid items-center gap-0 pt-6 text-xs text-slate-500 md:grid-cols-2">
              <p className="mt-8 text-xs text-slate-500">
                © 2023 Lonnar. All right reserved
              </p>

              <div className="flex justify-end gap-4">
                <span className="inline-block size-4 rounded bg-slate-900" />
                <span className="inline-block size-4 rounded bg-slate-900" />
                <span className="inline-block size-4 rounded bg-slate-900" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
