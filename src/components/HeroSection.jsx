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

        <div className="sm:block sm:w-1/3 lg:w-3/5 relative my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
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
