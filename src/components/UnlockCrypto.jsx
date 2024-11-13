import { features } from "../constants";

const UnlockCrypto = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking wide">
        Unlock The Future
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          DeiFi With Oxilo
        </span>
      </h2>
      <div class="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          class="inline-flex bg-black justify-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 "
        >
          Learn more
        </a>
        <a
          href="#"
          class="inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-dark dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Get Started
        </a>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockCrypto;
