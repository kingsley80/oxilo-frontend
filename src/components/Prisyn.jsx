import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Prisyn = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Choose Your Plan
      </h2>
      <p className="text-md mb-4 text-center text-neutral-500">
        Flexible plans tailored to your needs to maximize your financial growth.
      </p>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-2xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-3xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-light">
                  {option.month}
                </span>{" "}
                <br className="mt-7" />
              </p>
              <p>
                <span className="text-neutral-600 tracking-light">
                  {option.clue}
                </span>
              </p>
              <hr className="border mt-4" />
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-light text-xl hover:bg-orange-800 border border-orange-900 rounded-lg transition duration-200"
              >
                {option.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prisyn;
