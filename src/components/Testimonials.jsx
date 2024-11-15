import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-14 tracking-wide">
      <h5 className="mt-1 mb-4 text-3xl sm:text-5xl lg:text-6xl text-center">
        What Users are saying About Oxilo
      </h5>
      <p className="text-md mb-4 text-center text-neutral-500">
        Discover how Oxilo is transforming the DeFi experience with
        user-friendly lending and borrowing.
      </p>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
            <div className="rounded-md p-6 text-md">
              <div className="flex mt-8 justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full border font-thin "
                  src={testimonial.image}
                  alt={testimonial.user}
                />
              </div>
              <div className="items-center text-center">
                <h6>{testimonial.user}</h6>
                <span className="text-sm italic font-thin text-neutral-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
