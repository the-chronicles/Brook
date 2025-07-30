import Navbar from "../components/Navbar";

function Index() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[77px] leading-20 font-medium text-gray-900 mb-6">
            Streamlining Business Loan Acquisition
          </h1>
          <p className="text-lg font-regular text-gray-600 mb-8 max-w-xl mx-auto">
            Get the funding your business needs with our quick loan application
            process. Enjoy fast approvals and flexible repayment options.
          </p>
          <a
            href="/contact"
            className="text-black px-8 py-3 text-lg"
          >
            View Demo
          </a>
          <a
            href="/contact"
            className="bg-[#335CFF] rounded-xl text-white px-8 py-3 text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

       <div className="flex items-center justify-center">  
        {/* min-h-screen */}
        <img src="Hero UI44.png" alt="" className="w-10/12" />
      </div>

    </>
  );
}

export default Index;
