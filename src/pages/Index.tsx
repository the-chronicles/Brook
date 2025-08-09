import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type ItemProps = {
  icon: "form" | "review" | "approve" | "offer" | "disburse" | "repay";
  title: string;
  desc: string;
};

function ProcessItem({ icon, title, desc }: ItemProps) {
  return (
    <div className="md:px-10">
      <div className="mb-4 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#335CFF]/10">
        <Icon kind={icon} />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
        {desc}
      </p>
    </div>
  );
}

function Icon({ kind }: { kind: ItemProps["icon"] }) {
  const common = "h-4 w-4 stroke-[#335CFF]";
  switch (kind) {
    case "form":
    case "review":
    case "approve":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="2">
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h6" />
        </svg>
      );
    case "offer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="2">
          <path d="M4 12h6l2-3 2 6 2-3h4" />
        </svg>
      );
    case "disburse":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="2">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "repay":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <path d="M14.5 9.5a2.5 2.5 0 0 0-2.5-2.5H10a2 2 0 0 0 0 4h2a2 2 0 1 1 0 4H9.5" />
        </svg>
      );
  }
}

function Index() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mx-auto max-w-2xl justify-center flex items-center gap-3 text-[13px] tracking-widest text-[#5C5C5C]">
            <span>
              <img src="/Vector.png" alt="sub" className="w-5" />
            </span>
            LONNAR IS IMPROVING YOUR FINANCES WITH AI •
            <span className="rounded-full items-center inline-flex bg-[#EBF1FF] px-2 py-1 font-medium text-[#335CFF]">
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
          <h1 className="text-[77px] leading-20 font-medium text-gray-900 mb-6">
            Streamlining Business Loan Acquisition
          </h1>
          <p className="text-lg font-regular text-gray-600 mb-8 max-w-xl mx-auto">
            Get the funding your business needs with our quick loan application
            process. Enjoy fast approvals and flexible repayment options.
          </p>

          <span className=" items-center inline-flex px-8 py-3 text-lg space-x-4">
            <a href="/contact">View Demo</a>
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

      <section className="py-20 px-20 bg-white container mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-8">
              Brook's features
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
                      <img
                        src="security-card.png"
                        alt=""
                        className="w-8 mb-4"
                      />
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
              <img src="/UI.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#335CFF]">
            THE PROCESS
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Brook’s Streamlined Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Our streamlined process makes it easy to apply for and receive
            business funding.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-14 max-w-6xl px-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
            <ProcessItem
              icon="form"
              title="Apply"
              desc="Complete the business loan application form on the EMS platform"
            />
            <ProcessItem
              icon="review"
              title="Review"
              desc="Our team reviews your application and may request additional information"
            />
            <ProcessItem
              icon="approve"
              title="Approval"
              desc="Receive loan approval with customized terms and repayment schedule"
            />
          </div>

          {/* Divider between rows */}
          <div className="my-8 hidden h-px bg-slate-200 md:block" />

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
            <ProcessItem
              icon="offer"
              title="Accept Offer"
              desc="Review and accept the loan offer and complete the Recova mandate"
            />
            <ProcessItem
              icon="disburse"
              title="Disbursement"
              desc="Funds are disbursed directly to your Lonnar wallet account"
            />
            <ProcessItem
              icon="repay"
              title="Repayment"
              desc="Make repayments by funding your Paga wallet for automatic deductions"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index;
