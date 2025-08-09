import Navbar from "../components/Navbar";
// import { BarChart3, FileText, Star, TrendingUp } from "lucide-react";
import Footer from "../components/Footer";

function Integrations() {
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

      <section className="py-20 px-20 bg-white container mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-8">
              Brook's Main features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging the capabilities of Brook can provide substantial
              benefits to your organization, enhancing operational efficiency
              and driving growth.
            </p>
          </div>

          {/* Renmoney Integration */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              <img src="UI1.png" alt="" className="w-10/12" />

              <div>
                <div className="mb-16">
                  <h3 className="text-4xl font-medium text-gray-900 mb-4">
                    Renmoney Integration
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Our strategic partnership with Renmoney enhances our loan
                    assessment and approval process. This integration allows for
                    comprehensive credit evaluation and risk assessment.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="security-card.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Credit scoring & risk assessment
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive credit scoring methodologies and
                        sophisticated risk assessment frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="chart-square.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Streamlined loan approval process
                      </h4>
                      <p className="text-sm text-gray-600">
                        The loan approval process has been significantly
                        optimized to enhance efficiency and reduce turnaround
                        times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="Group.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Fast data exchange for quick decisions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Strong security measures enable businesses to share
                        sensitive information efficiently, enhancing operational
                        effectiveness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="money-time.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Review of declined applications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive assessment strategies for applications
                        that have been declined.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revolut Wallet Integration */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-16">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">
                    YOUR BUSINESS
                  </p>
                  <h3 className="text-4xl font-medium text-gray-900 mb-4">
                    Revolut Wallet Integration
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Our integration with Revolut's digital wallet system enables
                    seamless fund disbursement and repayment. Each business
                    receives a dedicated Revolut wallet for managing loan
                    transactions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="wallet-3.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Fund your Revolut wallet
                      </h4>
                      <p className="text-sm text-gray-600">
                        Transfer funds instantly to your Revolut wallet for
                        quick and secure transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="receipt-2.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Auto loan payments
                      </h4>
                      <p className="text-sm text-gray-600">
                        Automated loan repayment systems streamline
                        transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img
                        src="password-check.png"
                        alt=""
                        className="w-8 mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Real-time transaction tracking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Real-time financial transaction monitoring for improved
                        transparency and accountability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="3d-rotate.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Funding options for your wallet
                      </h4>
                      <p className="text-sm text-gray-600">
                        Discover quick funding options to boost your financial
                        management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="rounded-[32px] bg-gray-50 p-6 sm:p-8"> */}
              <img src="/UI.png" alt="" />
              {/* Card 1 — Available Capital */}
              {/* <div className="mb-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10"> */}
              {/* $ icon */}
              {/* <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M15 9.5c0-.97-.9-1.75-2-1.75h-2c-1.1 0-2 .78-2 1.75S9.9 11.25 11 11.25h2c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75h-2" />
                        <path d="M12 6.5v11" />
                      </svg>
                    </div>
                  </div> */}

              {/* <p className="text-sm text-slate-600">Available Capital</p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-3xl font-semibold text-slate-900">
                      $12,546,300
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                      >
                        <path d="M8 3l4 5H9v5H7V8H4l4-5z" />
                      </svg>
                      12.5%
                    </span>
                  </div>
                </div> */}

              {/* Card 2 — Cash flow */}
              {/* <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="text-sm text-slate-600">Cash flow</p>
                    <button className="inline-flex items-center gap-1 rounded-xl border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm">
                      Q3
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06L8.53 10.53a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mb-4 flex items-center gap-2">
                    <p className="text-2xl font-semibold text-slate-900">
                      $14,480.24
                    </p>
                    <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                      +25%
                    </span>
                  </div>

                  {/* Chart area */}
              {/* <div className="relative rounded-2xl border border-black/5 bg-white/60 p-4"> */}
              {/* gridlines */}
              {/* <svg viewBox="0 0 100 40" className="h-28 w-full"> */}
              {/* vertical grid (light dotted) */}
              {/* {[20, 40, 60, 80].map((x) => (
                        <line
                          key={x}
                          x1={x}
                          y1={0}
                          x2={x}
                          y2={40}
                          stroke="rgba(0,0,0,0.06)"
                          strokeDasharray="1 3"
                        />
                      ))} */}
              {/* line path */}
              {/* <path
                        d="M2,32 L10,20 L24,20 L32,20 L40,26 L50,30 L60,26 L68,18 L78,18 L86,26 L96,26"
                        fill="none"
                        stroke="#3b5bff"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg> */}

              {/* X axis labels */}
              {/* <div className="mt-1 grid grid-cols-6 text-[11px] text-slate-500">
                      <span>0</span>
                      <span className="text-center">2K</span>
                      <span className="text-center">3K</span>
                      <span className="text-center">4K</span>
                      <span className="text-center">5K</span>
                      <span className="text-right">100</span>
                    </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>

          {/* EMS Platform Integration */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl bg-orange-50 p-6 sm:p-10">
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">
                    Loan Details
                  </h3>

                  {/* Amount block */}
                  <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                    <p className="mb-1 text-sm text-gray-500">Amount</p>
                    <p className="text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                      $56,000,000.00
                    </p>
                  </div>

                  {/* Details block */}
                  <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-sm text-gray-500">Date</p>
                        <p className="text-base font-medium text-gray-900">
                          May 10, 2025 at 10:00AM
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-gray-500">Term</p>
                        <p className="text-base font-medium text-gray-900">
                          12 Months
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-sm text-gray-500">
                          Reference ID
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          Loan #54321
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-gray-500">Status</p>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      className=" rounded-xl bg-gray-100 px-9 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="rounded-xl bg-gray-900 px-9 py-3 text-center text-sm font-medium text-white hover:bg-black"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-30">
                  <h3 className="text-3xl font-medium text-gray-900 mb-4">
                    EMS Platform Integration
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Our integration with the EMS platform provides businesses
                    with a comprehensive dashboard for managing their loan
                    applications and accounts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="grid-5.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Unified business dashboard
                      </h4>
                      <p className="text-sm text-gray-600">
                        Unified Business Dashboard for Better Decision-Making.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div>
                      <img src="folder-open.png" alt="" className="w-8 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Document submission
                      </h4>
                      <p className="text-sm text-gray-600">
                        Streamlined document submission for a smooth user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium">
              API Integration for Businesses
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              For businesses looking to integrate Brook’s loan services directly
              into their platforms.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-left">
              <h3 className="text-2xl font-medium mb-4">
                Seamless API Integration
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our developer-friendly API allows businesses to integrate
                Swipe's loan application and management features directly into
                their own platforms. This enables a seamless experience for your
                customers without leaving your ecosystem.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-[#1e1e1e] text-white text-xs rounded-lg p-6 overflow-x-auto font-mono shadow-lg">
              <pre className="whitespace-pre">
                {`// Example API Request
fetch('https://api.swipe.com/v1/loan-application', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    businessName: 'Acme Inc',
    registrationNumber: 'RC123456',
    loanAmount: 5000000,
    purpose: 'Inventory purchase',
    // ...
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Integrations;
