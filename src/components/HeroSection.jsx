const HeroSection = () => {
  return (
    <div class="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2">
      <div class="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
        <div class="mb-4 flex items-center justify-center lg:justify-start">
          <img
            class="h-5"
            src="https://www.tailwind-kit.com/images/object/10.png"
            alt="logo"
          />
          <h4 class="ml-2 text-sm font-bold tracking-widest text-primary">
            TRENDIEST CRYPTO UNIVERSE
          </h4>
        </div>
        <h1 class="mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
          Empower your Crypto With The Leading Blockchain Innovators.
        </h1>
        <p class="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
          Save hundreds of hours trying to create and develop a dashboard from
          scratch. The fastest, most responsive & trendiest dashboard is here.
          Seriously.
        </p>

        <div class="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex bg-black justify-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 "
          >
            Start for free
          </a>
          <a
            href="#"
            class="inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-dark dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Documentation
          </a>
        </div>
      </div>

      <div class="sm:block sm:w-full lg:w-full relative">
        <img src="https://images.pexels.com/photos/6778650/pexels-photo-6778650.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
    </div>
  );
};

export default HeroSection;
