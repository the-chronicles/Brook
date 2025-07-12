import Navbar from "../components/Navbar";

function Integration() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-medium text-gray-900 mb-6">
            Brook's Integrations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Brook seamlessly integrates with leading financial institutions and
            platforms to provide a smooth loan experience.
          </p>
          <a
            href="/contact"
            className="bg-[#335CFF] rounded-xl text-white px-8 py-3 text-lg"
          >
            Contact Sales
          </a>
        </div>
      </section>

      <div className="flex items-center justify-center">  
        {/* min-h-screen */}
        <img src="Hero UI4.png" alt="" className="w-10/12" />
      </div>
    </>
  );
}

export default Integration;
