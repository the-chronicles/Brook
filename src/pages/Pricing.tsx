import { Check } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const faqs = [
  {
    q: "How is the interest rate determined?",
    a: "Interest rates are determined based on several factors including your business's credit profile, time in operation, revenue history, and the loan amount and term you select. We offer competitive rates starting from 1.5% monthly.",
  },
  { q: "Are there any hidden fees?", a: "" },
  { q: "Can I repay my loan early?", a: "" },
  { q: "How is the processing fee calculated?", a: "" },
  { q: "What happens if I miss a payment?", a: "" },
  { q: "Can I get a customized loan offer?", a: "" },
];

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Loan Options
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Choose the loan option that best fits your business requirements.
          </p>
        </section>

        {/* Loan cards */}
        <section
          aria-labelledby="pricing-title"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <h2 id="pricing-title" className="sr-only">
            Loan Options
          </h2>

          <div className="grid py-36 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter Loan */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold text-[#335CFF]">
                  Starter Loan
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  For small businesses just getting started
                </p>

                <p className="mt-6 text-2xl font-semibold text-slate-900">
                  $500K - $2M
                </p>
                <div className="my-5 h-px bg-slate-200" />

                <p className="text-sm font-medium text-slate-900">
                  Everything Included
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>3-12 month terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Interest rate: 2.5% - 3.5% monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Processing fee: 1%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>48-hour approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Minimal documentation</span>
                  </li>
                </ul>

                {/* Push button to bottom */}
                <button className="mt-auto w-full rounded-md bg-[#335CFF] py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Apply now
                </button>
              </div>
            </div>

            {/* Growth Loan */}
            <div className="relative flex h-full flex-col rounded-2xl border border-[#335CFF] bg-[#335CFF] p-6 text-white shadow-sm">
              <span className="absolute -top-4 right-10 rotate-10 select-none rounded-full bg-[#122368] px-3 py-2 text-[10px] font-semibold shadow-sm">
                🔥 Most Popular
              </span>

              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold">Growth Loan</p>
                <p className="mt-1 text-xs text-indigo-100">
                  For established businesses looking to expand
                </p>

                <p className="mt-6 text-2xl font-semibold">$2M - $10M</p>
                <div className="my-5 h-px bg-white/20" />

                <p className="text-sm font-medium">Everything included</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-white" />
                    <span>6-18 month terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-white" />
                    <span>Interest rate: 2% - 3% monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-white" />
                    <span>Processing fee: 0.75%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-white" />
                    <span>72-hour approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-white" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>

                <button className="mt-auto w-full rounded-md bg-white py-2 text-sm font-medium text-black hover:bg-indigo-700">
                  Apply now
                </button>
              </div>
            </div>

            {/* Enterprise Loan */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold text-[#335CFF]">
                  Enterprise Loan
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  For larger businesses with established operations
                </p>

                <p className="mt-6 text-2xl font-semibold text-slate-900">
                  $10M - $50M
                </p>
                <div className="my-5 h-px bg-slate-200" />

                <p className="text-sm font-medium text-slate-900">
                  Everything Included
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>12-24 month terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Interest rate: 1.5% - 2.5% monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Processing fee: 0.5%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Customized approval timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-[#335CFF]" />
                    <span>Premium business support</span>
                  </li>
                </ul>

                <button className="mt-10 w-full rounded-md bg-[#335CFF] py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Apply now
                </button>
              </div>
            </div>

            {/* Custom Plan */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold text-slate-700">
                  Custom Plan
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Perfect for Large Companies
                </p>

                <p className="mt-6 text-2xl font-semibold text-slate-900">
                  Talk to Us!
                </p>
                <div className="my-5 h-px bg-slate-200" />

                <p className="text-sm leading-relaxed text-slate-700">
                  Our team is dedicated to understanding your unique financial
                  needs and will work closely with you to develop tailored plans
                  that align with your goals. Let us assist you in crafting a
                  financing strategy that best suits your aspirations.
                </p>

                <button className="mt-auto w-full rounded-md bg-black py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section
          aria-labelledby="fee-structure-title"
          className="mx-auto max-w-6xl px-4 py-36 sm:px-6 lg:px-8 "
        >
          <div className="text-center">
            <h2
              id="fee-structure-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Fee Structure
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              We believe in transparent pricing with no hidden fees.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Standard Fees Card */}
            <div className="rounded-2xl border border-slate-200 bg-white flex flex-col">
              <div className="px-6 py-3  font-medium text-slate-600">
                Standard Fees
                <hr className="mt-5 -mb-5 text-slate-200 " />
              </div>

              <div className="px-6 py-6 flex flex-col flex-1">
                {/* Make this part same height across all cards */}
                <div className="grid grid-cols-3 gap-6 divide-x divide-dashed divide-slate-200 flex-1">
                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">Processing Fee</p>
                    <p className="text-xl font-medium text-slate-900">
                      0.5% - 1%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">Interest Rate</p>
                    <p className="text-xl font-medium text-slate-900 leading-tight">
                      1.5% - 3.5% Monthly
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">
                      Disbursement Fee
                    </p>
                    <p className="text-xl font-medium text-slate-900">Free</p>
                  </div>
                </div>

                {/* Bars stay pinned at bottom */}
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="h-2 w-full rounded-[2px] bg-pink-500" />
                  <div className="h-2 w-full rounded-[2px] bg-blue-600" />
                  <div className="h-2 w-full rounded-[2px] bg-sky-400" />
                </div>
              </div>
            </div>

            {/* Additional Fees Card */}
            <div className="rounded-2xl border border-slate-200 bg-white flex flex-col">
              <div className="px-6 py-3 font-medium text-slate-600">
                Additional Fees
                <hr className="mt-5 -mb-5 text-slate-200 " />
              </div>

              <div className="px-6 py-6 flex flex-col flex-1">
                {/* Same height wrapper */}
                <div className="grid grid-cols-3 gap-6 divide-x divide-dashed divide-slate-200 flex-1">
                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">
                      Late Payment Fee
                    </p>
                    <p className="text-xl font-medium text-slate-900">
                      0.5% - 1%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">
                      Early Repayment Fee
                    </p>
                    <p className="text-xl font-medium text-slate-900 leading-tight">
                      1.5% - 3.5% Monthly
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-slate-500">
                      Documentation Fee
                    </p>
                    <p className="text-xl font-medium text-slate-900">Free</p>
                  </div>
                </div>

                {/* Bars pinned at bottom */}
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="h-2 w-full rounded-[2px] bg-pink-500" />
                  <div className="h-2 w-full rounded-[2px] bg-blue-600" />
                  <div className="h-2 w-full rounded-[2px] bg-sky-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F7F7F7] py-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-slate-600">
              Ac fermentum orci accumsan ullamcorper magna. Cursus ullamcorper
              commodo nunc etiam praesent vel enim faucibus non. Euismod
              consequat malesuada amet mollis diam
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl px-4 space-y-4 sm:px-6 lg:px-8">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl p-5  border-slate-200 py-5"
              >
                <summary className="flex cursor-pointer  items-center justify-between text-left text-sm font-medium text-slate-800">
                  {faq.q}
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 rotate-180"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                {faq.a && (
                  <p className="mt-2 text-xs text-slate-600">{faq.a}</p>
                )}
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
