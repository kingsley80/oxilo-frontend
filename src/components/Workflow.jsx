import codeImg from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-96">
          <div className="flex mb-12">
            <div>
              <h5 className="mt-1 mb-2 text-2xl">
                Unlock The Potential of your Crypto
              </h5>
              <p className="text-md mb-4 text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                in, excepturi inventore illo reiciendis adipisci nulla dolor
                illum cupiditate possimus.
              </p>

              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="text-1xl font-bold tracking-tight">
                  Explore New Horizons With Oxilo
                </h5>
                <p class="font-normal">
                  Download the latest version of Oxilo app to access enhanced
                  features and a seamless experience.
                </p>
              </a>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-light text-xl hover:bg-orange-800 border border-orange-900 rounded-lg transition duration-200"
              >
                Begin your Journey
              </a>
            </div>
          </div>
        </div>
        <div className="p-2 w-full lg:ml-16 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/730568/pexels-photo-730568.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Code"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
