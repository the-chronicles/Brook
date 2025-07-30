import Navbar from "../components/Navbar";
import {
  FileText,
  BarChart3,
  Star,
  ChevronDown,
  TrendingUp,
  Badge,

} from "lucide-react"

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


      <section className="py-20 px-20 bg-white container mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Brook's Main features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging the capabilities of Brook can provide substantial benefits to your organization, enhancing
              operational efficiency and driving growth.
            </p>
          </div>

          {/* Renmoney Integration */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                <img src="UI1.png" alt=""  className="w-10/12"/>
              {/* <div className="bg-blue-50 rounded-2xl p-8">
              </div> */}

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Renmoney Integration</h3>
                <p className="text-gray-600 mb-8">
                  Our strategic partnership with Renmoney enhances our loan assessment and approval process. This
                  integration allows for comprehensive credit evaluation and risk assessment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Credit scoring & risk assessment</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive credit scoring methodologies and sophisticated risk assessment frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Streamlined loan approval process</h4>
                      <p className="text-sm text-gray-600">
                        The loan approval process has been significantly optimized to enhance efficiency and reduce
                        turnaround times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fast data exchange for quick decisions</h4>
                      <p className="text-sm text-gray-600">
                        Strong security measures enable businesses to share sensitive information efficiently, enhancing
                        operational effectiveness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Review of declined applications</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive assessment strategies for applications that have been declined.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">YOUR BUSINESS</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Revolut Wallet Integration</h3>
                <p className="text-gray-600 mb-8">
                  Our integration with Revolut's digital wallet system enables seamless fund disbursement and repayment.
                  Each business receives a dedicated Revolut wallet for managing loan transactions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fund your Revolut wallet</h4>
                      <p className="text-sm text-gray-600">
                        Transfer funds instantly to your Revolut wallet for quick and secure transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Auto loan payments</h4>
                      <p className="text-sm text-gray-600">Automated loan repayment systems streamline transactions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-time transaction tracking</h4>
                      <p className="text-sm text-gray-600">
                        Real-time financial transaction monitoring for improved transparency and accountability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Funding options for your wallet</h4>
                      <p className="text-sm text-gray-600">
                        Discover quick funding options to boost your financial management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-1">Available Capital</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">$12,546,300</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+12.5%</Badge>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Cash flow</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Q3</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <p className="text-xl font-bold text-gray-900">$14,480.24</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+25%</Badge>
                    </div>

                    {/* Simple chart representation */}
                    <div className="h-20 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg flex items-end justify-between px-2 pb-2">
                      <div className="w-1 bg-blue-600 rounded-t" style={{ height: "60%" }}></div>
                      <div className="w-1 bg-blue-600 rounded-t" style={{ height: "40%" }}></div>
                      <div className="w-1 bg-blue-600 rounded-t" style={{ height: "80%" }}></div>
                      <div className="w-1 bg-blue-600 rounded-t" style={{ height: "50%" }}></div>
                      <div className="w-1 bg-blue-600 rounded-t" style={{ height: "70%" }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMS Platform Integration */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Loan Details</h3>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-1">Amount</p>
                    <p className="text-3xl font-bold text-gray-900">$56,000,000.00</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <p className="text-sm font-medium">May 10, 2025 at 10:00AM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Term</p>
                      <p className="text-sm font-medium">12 Months</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Reference ID</p>
                      <p className="text-sm font-medium">Loan #54321</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a href="" className="flex-1 bg-transparent">
                      Close
                    </a>
                    <a href="" className="flex-1 bg-gray-900 hover:bg-gray-800">Share</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">EMS Platform Integration</h3>
                <p className="text-gray-600 mb-8">
                  Our integration with the EMS platform provides businesses with a comprehensive dashboard for managing
                  their loan applications and accounts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Unified business dashboard</h4>
                      <p className="text-sm text-gray-600">Unified Business Dashboard for Better Decision-Making.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Document submission</h4>
                      <p className="text-sm text-gray-600">
                        Streamlined document submission for a smooth user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Integration;
