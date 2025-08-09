import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type ItemProps = {
  icon: "form" | "review" | "approve" | "offer" | "disburse" | "repay";
  title: string;
  desc: string;
  borderRight?: boolean;
  borderBottom?: boolean;
};

function ProcessItem({
  icon,
  title,
  desc,
  borderRight,
  borderBottom,
}: ItemProps) {
  return (
    <div
      className={[
        "flex flex-col gap-3 p-8",
        borderRight ? "border-r border-[#D1D1D1]" : "",
        borderBottom ? "border-b border-[#D1D1D1]" : "",
      ].join(" ")}
    >
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#335CFF]/10">
        <Icon kind={icon} />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function Icon({ kind }: { kind: ItemProps["icon"] }) {
  switch (kind) {
    case "form":
      return <img src="/Vector01.png" alt="" />;
    case "review":
      return <img src="/Vector02.png" alt="" />;
    case "approve":
      return <img src="/Vector1.png" alt="" />;
    case "offer":
      return <img src="/Vector2.png" alt="" />;
    case "disburse":
      return <img src="/Vector3.png" alt="" />;
    case "repay":
      return <img src="/Vector4.png" alt="" />;
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

      <section className="py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            Simple Financing Solutions!
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Our business loan solution offers a range of features designed to
            make financing simple and accessible.
          </p>
        </div>

        {/* Cards Grid (12-col for precise placement) */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Fast Processing */}
          <div className="lg:col-span-4">
            <div className="rounded-[30px] border border-slate-200 bg-[#F7F8F8] p-[40px] ">
              <div className="rounded-[30px] bg-white border-[#EBEBEB] border-4 p-[20px] space-y-5 ring-1 ring-black/5">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Linked Account</span>
                  <span>•••• 9987</span>
                </div>

                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  $22,000
                </p>

                <div className="mt-3 flex items-center  justify-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs text-slate-600 ring-1 ring-slate-200">
                  <span>Sending</span>
                  {/* static spinner icon (no animation) */}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 2a8 8 0 1 0 8 8" strokeOpacity=".35" />
                    <path d="M10 2a8 8 0 0 1 8 8" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Fast Processing
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              An expedited review and approval process designed to facilitate
              quicker access to funding for your projects.
            </p>
          </div>

          {/* Seamless Disbursement (blue wallet) */}
          <div className="lg:col-span-4">
            <div className="rounded-[22px] border border-slate-200 bg-[#F7F8F8] p-6 ">
              <div className="rounded-[30px] bg-black p-[20px] space-y-5 ring-1 ring-black/5">
                {/* top dial */}
                <div className="relative  left-30 h-8 w-8 rounded-full bg-white ring-1 ring-black/10" />
                {/* inner blue panel */}
                <div className="rounded-2xl border-2 border-black/50 bg-[#335CFF] px-5 py-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/85">Disbursement</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    $22,000
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Seamless Disbursement
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Funds go straight into your Lonnar wallet, giving you instant
              access to your resources for efficient money management.
            </p>
          </div>

          {/* Flexible Terms (pay now) */}
          <div className="lg:col-span-4">
            <div className="rounded-[22px] border border-slate-200 bg-[#F7F8F8] p-6 ">
              <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-black/5">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Loan #54321</span>
                  <span>Due on July 15</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-[#335CFF]">
                  $54,900
                </p>
                <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                  Pay now
                </button>
              </div>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Flexible Terms
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Repayment plans designed to meet the unique needs of your
              business, providing options to manage your financial commitments.
            </p>
          </div>

          {/* Multiple Lenders (spans 6) */}
          <div className="lg:col-span-4">
            <div className="rounded-[22px] border border-slate-200 bg-[#F7F8F8] p-6 ">
              <div className="rounded-3xl bg-slate-50 p-8 text-center ring-1 ring-black/5">
                <p className="text-xs text-slate-500">Financing options</p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">$0</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold  ring-1 ring-slate-200">
                    bo
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold shadow-sm ring-1 ring-slate-200">
                    citi
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold shadow-sm ring-1 ring-slate-200">
                    s•
                  </span>
                </div>
              </div>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Multiple Lenders
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Explore a variety of financing options to suit your needs,
              including loans, grants, and flexible payment plans.
            </p>
          </div>

          {/* Automated Repayments (orange wallet, spans 6) */}
          <div className="lg:col-span-4 ">
            <div className="rounded-[22px] border border-slate-200 bg-[#F7F8F8] p-6 ">
              <div className="relative overflow-hidden rounded-[26px] bg-black p-4 pt-8 ring-1 ring-black/5">
                {/* top dial */}
                <div className="absolute -top-3 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white ring-1 ring-black/10" />
                {/* inner orange panel */}
                <div className="rounded-2xl border-2 border-black/50 bg-[#FF7A00] px-5 py-8 text-white">
                  <div className="flex items-center justify-between text-white/85">
                    <span className="text-sm">Auto Repayment</span>
                    <span className="text-sm">Due Today</span>
                  </div>
                  <p className="mt-3 text-3xl font-semibold">$122,000</p>
                  <span className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-[#3b5bff]" />
                </div>
              </div>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Automated Repayments
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Automatic deductions from your Lonnar wallet simplify financial
              management.
            </p>
          </div>
        </div>
      </section>

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

      <section className="bg-[#F7F7F7] py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-4 text-center mb-36">
          <p className="text-[11px] font-medium tracking-[0.2em] mb-7 text-[#335CFF]">
            THE PROCESS
          </p>
          <h2 className="mt-3 text-4xl font-medium tracking-tight text-slate-900">
            Brook’s Streamlined Process
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm text-slate-600">
            Our streamlined process makes it easy to apply for and receive
            business funding.
          </p>
        </div>

        {/* Table-like Grid */}
        <div className="mt-14 mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1  border-slate-200 md:grid-cols-3">
            <ProcessItem
              icon="form"
              title="Apply"
              desc="Complete the business loan application form on the EMS platform"
              borderRight
              borderBottom
            />
            <ProcessItem
              icon="review"
              title="Review"
              desc="Our team reviews your application and may request additional information"
              borderRight
              borderBottom
            />
            <ProcessItem
              icon="approve"
              title="Approval"
              desc="Receive loan approval with customized terms and repayment schedule"
              borderBottom
            />
            <ProcessItem
              icon="offer"
              title="Accept Offer"
              desc="Review and accept the loan offer and complete the Recova mandate"
              borderRight
            />
            <ProcessItem
              icon="disburse"
              title="Disbursement"
              desc="Funds are disbursed directly to your Lonnar wallet account"
              borderRight
            />
            <ProcessItem
              icon="repay"
              title="Repayment"
              desc="Make repayments by funding your Paga wallet for automatic deductions"
            />
          </div>
        </div>
      </section>

      <section className="py-20 ">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-[11px] font-medium mb-7 tracking-[0.2em] text-[#335CFF]">
            THE PROCESS
          </p>
          <h2 className="mt-3 text-4xl font-medium tracking-tight text-slate-900">
            Results from our customers
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm text-slate-600">
            Our streamlined process makes it easy to apply for and receive
            business funding.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-4">
          {/* 1 — Testimonial */}
          <div className="col-span-2 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-[18px] leading-6 text-slate-900">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud”
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/justin-jackson.jpg.png"
                  alt="Anita Stone"
                  className="h-9 w-9 rounded-xl"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Anita Stone
                  </p>
                  <p className="text-xs text-slate-500">VP of JP Morgan</p>
                </div>
              </div>
              <img src="/forbes.png" alt="Forbes" className="w-20" />
            </div>
          </div>

          {/* 2 — Stat card (mint) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#DBF4E5] p-6">
            <div>
              <p className="text-4xl font-medium text-slate-900">90%</p>
              <p className="mt-1 text-sm text-slate-600">Stats</p>
            </div>
            <img src="/tc.png" alt="Logo" className="mt-8 w-14" />
          </div>

          {/* 3 — Stat card (lavender) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#EDEAFF] p-6">
            <div>
              <p className="text-4xl font-medium text-slate-900">90%</p>
              <p className="mt-1 text-sm text-slate-600">Stats</p>
            </div>
            <img src="/wsj.png" alt="Logo" className="mt-16 w-14" />
          </div>

          {/* 4 — Stat card (butter) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#F9F1D7] p-6">
            <div>
              <p className="text-4xl font-medium text-slate-900">90%</p>
              <p className="mt-1 text-sm text-slate-600">Stats</p>
            </div>
            <img src="/cn.png" alt="Logo" className="mt-8 w-14" />
          </div>

          {/* 5 — Stat card (powder blue) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#E6F1FF] p-6">
            <div>
              <p className="text-4xl font-medium text-slate-900">90%</p>
              <p className="mt-1 text-sm text-slate-600">Stats</p>
            </div>
            <img src="/ft.png" alt="Logo" className="mt-8 w-30" />
          </div>

          {/* 6 — Testimonial */}
          <div className="col-span-2 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-[18px] leading-6 text-slate-900">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud”
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/justin-jackson.jpg.png"
                  alt="Anita Stone"
                  className="h-9 w-9 rounded-xl"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Anita Stone
                  </p>
                  <p className="text-xs text-slate-500">VP of JP Morgan</p>
                </div>
              </div>
              <img src="/forbes.png" alt="Forbes" className="w-20" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index;
