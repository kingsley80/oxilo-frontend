import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class=" sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Oxilo™{" "}
          </a>
          All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 font-medium sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Features
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
