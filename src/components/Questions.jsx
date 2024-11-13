import React from "react";

const Questions = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Your Questions Answered
      </h2>

      <div class="accordion-group" data-accordion="default-accordion">
        <div
          class="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
          id="basic-heading-one-with-icon"
        >
          <button
            class="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 "
            aria-controls="basic-collapse-one-with-icon"
          >
            <h5 className="text-2xl mb-2">
              {" "}
              What is Oxilo and how does it work?{" "}
            </h5>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 18V6"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id="basic-collapse-one-with-icon"
            class="accordion-content w-full  overflow-hidden pr-4"
            aria-labelledby="basic-heading-one"
          >
            <p class="text-base text-gray-900 leading-6">
              To create an account, find the 'Sign up' or 'Create account'
              button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your
              email address if needed, and then log in to start using the
              platform.
            </p>
          </div>
        </div>
        <div
          class="accordion border border-solid border-gray-300 p-4 rounded-xl  accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
          id="basic-heading-two-with-icon"
        >
          <button
            class="accordion-toggle group  inline-flex items-center justify-between text-left text-base leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 "
            aria-controls="basic-collapse-two-with-icon"
          >
            <h5 className="text-2xl mb-2">
              {" "}
              How secure is Oxilo for Cryptocurrency transactions?{" "}
            </h5>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 18V6"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id="basic-collapse-two-with-icon"
            class="accordion-content w-full  overflow-hidden   pr-4"
            aria-labelledby="basic-heading-two"
          >
            <p class="text-base text-gray-900 leading-6">
              To create an account, find the 'Sign up' or 'Create account'
              button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your
              email address if needed, and then log in to start using the
              platform.
            </p>
          </div>
        </div>
        <div
          class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
          id="basic-heading-three-with-icon"
        >
          <button
            class="accordion-toggle group  inline-flex items-center justify-between text-left text-base leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 "
            aria-controls="basic-collapse-three-with-icon"
          >
            <h5 className="text-2xl mb-2">
              {" "}
              What measures does Oxilo take to ensure user privacy?{" "}
            </h5>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 18V6"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id="basic-collapse-three-with-icon"
            class="accordion-content w-full  overflow-hidden   pr-4 "
            aria-labelledby="basic-heading-three"
          >
            <p class="text-base text-gray-900 leading-6">
              To create an account, find the 'Sign up' or 'Create account'
              button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your
              email address if needed, and then log in to start using the
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
