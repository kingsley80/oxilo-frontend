import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Choose Your Plan
      </h2>
      <p className="text-md mb-4 text-center text-neutral-500">
        Flexible plans tailored to your needs to maximize your financial growth.
        <br />
        <div class="inline-flex mt-4 mb-7 rounded-md shadow-sm">
          <a
            href="#"
            aria-current="page"
            class="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-s-lg  hover:bg-blue-50 "
          >
            Monthly
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-100 "
          >
            Yearly
          </a>
        </div>
      </p>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8">
              Basic Plan
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2"></span>
            </p>
            <p className="mb-8">
              <span className="text-3xl mt-6 mr-2">$0</span>
              <span className="text-neutral-400 tracking-light">
                Free Forever
              </span>{" "}
              <br className="mt-7" />
            </p>
            <p>
              <span className="text-neutral-600 tracking-light text-sm">
                Perfect for individual exploring DeFi
              </span>
            </p>
            <hr className="border mt-4" />
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Secure Wallet</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Basic Support</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Portfolio View</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Market Update</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Educational Resources</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Community Access</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-light text-xl hover:bg-orange-800 border border-orange-900 rounded-lg transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8">
              Pro Plan
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2"></span>
            </p>
            <p className="mb-8">
              <span className="text-3xl mt-6 mr-2">$12</span>
              <span className="text-neutral-400 tracking-light">
                / $19 per Month
              </span>{" "}
              <br className="mt-7" />
            </p>
            <p>
              <span className="text-neutral-600 tracking-light text-sm">
                Ideal for serious traders and teams
              </span>
            </p>
            <hr className="border mt-4" />
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Advanced Analytics</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Priority Support</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Custom Alerts</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Expanded Resources</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Exclusive Webinars</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Voting Power</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex bg-blue-500 justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-light text-xl hover:bg-blue-700 border border-blue-400 rounded-lg transition duration-200 text-white"
            >
              Join Now
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8">
              Enterprise Plan
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2"></span>
            </p>
            <p className="mb-8">
              <span className="text-3xl mt-6 mr-2">Custom Pricing</span>
              <br className="mt-7" />
            </p>
            <p>
              <span className="text-neutral-600 tracking-light text-sm">
                Tailor-made solutions for organizations
              </span>
            </p>
            <hr className="border mt-4" />
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Dedicated Account Manager</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Custom Integrations</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">24/7 Support</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Enhanced Security</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Bespoke Analytics</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 className="text-green-500" />
                <span className="ml-2">Comprehensive Training</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-light text-xl hover:bg-orange-800 border border-orange-900 rounded-lg transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
