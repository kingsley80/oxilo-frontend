import React from "react";
import Questions from "./Questions";

const Answers = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-5 tracking-wider">
        Your Questions Answered
      </h2>
      <p className="text-md mb-9 text-center text-neutral-500">
        Explore Oxilo Features.
      </p>
      <div className="p-4 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="What is Oxilo and how does it work?"
          answer="Oxilo is Cryptocurrency web app."
        />
      </div>

      <div className="p-4 mt-5 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="How secure is Oxilo for Cryptocurrency transactions?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>

      <div className="p-4 mt-5 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="Can I access Oxilo on mobile devices?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>

      <div className="p-4 mt-5 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="What are the benefits of staking on Oxilo?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>

      <div className="p-4 mt-5 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="How can start borrowing or lending on Oxilo?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>

      <div className="p-4 mt-5 shadow-sm border dark:border-gray-300 rounded-lg">
        <Questions
          title="What measures does Oxilo take to ensure user privacy?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum temporibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos iste doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default Answers;
