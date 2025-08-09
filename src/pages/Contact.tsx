import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Have questions about our business loans? Our team is here to help.
          </p>
        </section>

        {/* Contact grid */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Left: Form */}
            <div className="md:col-span-6 md:pr-8">
              <h2 className="text-4xl font-semibold tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Our friendly team would love to hear from you.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-5"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400 outline-none ring-indigo-600/20 focus:border-indigo-600 focus:ring-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400 outline-none ring-indigo-600/20 focus:border-indigo-600 focus:ring-4"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400 outline-none ring-indigo-600/20 focus:border-indigo-600 focus:ring-4"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <select className="h-11 w-28 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/20">
                      <option>US</option>
                      <option>NG</option>
                      <option>UK</option>
                      <option>CA</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400 outline-none ring-indigo-600/20 focus:border-indigo-600 focus:ring-4"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Leave us a message..."
                    className="h-40 w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 outline-none ring-indigo-600/20 focus:border-indigo-600 focus:ring-4"
                  />
                </div>

                <label className="flex items-center  gap-2  text-xs text-slate-600">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 rounded border-slate-300"
                  />
                  You agree to our friendly privacy policy.
                </label>

                {/* Full width like the mock */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-6 md:pl-8">
              <div className="overflow-hidden rounded-3xl">
                <div className="aspect-[4/5] w-full">
                  <img
                    src="/contact.png"
                    alt="Support specialist on a call"
                    className="h-full w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <Footer />
      </div>
    </>
  );
}

export default Contact;
