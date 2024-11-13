import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-14 tracking-wide">
      {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center lg:my-20">
        What Users are saying About Oxilo
      </h2>
      <p class="text-center">
        Save hundreds of hours trying to create and develop a dashboard from
        scratch. The fastest, most responsive & trendiest dashboard is here.
        Seriously.
      </p> */}
      <h5 className="mt-1 mb-4 text-3xl sm:text-5xl lg:text-6xl text-center">
        What Users are saying About Oxilo
      </h5>
      <p className="text-md mb-4 text-center text-neutral-500">
        Discover how Oxilo is transforming the DeFi experience with
        user-friendly lending and borrowing.
      </p>

      {/* <p>
        Discover how Oxilo is trnasforming the Deifi experience with
        user-friendly lending and borrowing.
      </p> */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
            <div className=" rounded-md  p-6 text-md border ">
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border font-thin border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm italic font-thin text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
