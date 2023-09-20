import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
// import logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
// import { Divider } from "@mui/material";

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-[#222222] text-white py-16 sm:py-24 lg:py-32 ">
      <div className="mx-auto px-5 lg:px-10 xl:px-10 2xl:px-10 max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 border-b pb-12 md:grid-cols-2 lg:max-w-none lg:grid-cols-4 sm:grid-c">
          <div className="max-w-xl lg:max-w-lg">
            {/* <img src={logo} alt="footerLogo" width="70" height="60" /> */}
            <p className="mt-4 text-lg leading-8">
              Profile tracker is a One Stop Virtual profile checking Platform for Creating
              Employability Through research and development.
            </p>
            <div className="mt-6 flex flex-col max-w-md gap-x-4">
              <h2 className="text-lg font-bold tracking-tight sm:text-lg">
                Follow Us
              </h2>

              <div className="flex space-x-4">
                <div className="border-white">
                  <a href="#" className="text-white  hover:text-gray-700">
                    <FaFacebookF
                      size={28}
                      className="border border-teal-300 bg-teal-500 rounded-sm p-1"
                    />
                  </a>
                </div>
                <a href="#" className="text-white  hover:text-gray-700">
                  <FaYoutube
                    size={28}
                    className="border border-teal-300 bg-teal-500 rounded-sm p-1"
                  />
                </a>
                <a href="#" className="text-white  hover:text-gray-700">
                  <FaLinkedinIn
                    size={28}
                    className="border border-teal-300 bg-teal-500 rounded-sm p-1"
                  />
                </a>
                <a href="#" className="text-white  hover:text-gray-700">
                  <FaInstagram
                    size={28}
                    className="border border-teal-300 bg-teal-500 rounded-sm p-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-md ">
              {/* <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" /> */}
            </div>
            <dt className="mb-5 font-semibold">Contact Us</dt>
            <div>
              <div className="flex gap-3 items-center my-2">
                <span>
                  <CiLocationOn />
                </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia-1209.</p>
              </div>
              <div className="flex gap-3 items-center my-2">
                <span>
                  <AiFillMail />
                </span>
                <p>support@profile-tracker.com</p>
              </div>
              <div className="flex gap-3 items-center my-2">
                <span>
                  <AiFillPhone />
                </span>
                <p>01XXX-000000</p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start flex-col nd:items-center lg:items-center xl:items-center">
            <div className="rounded-md bg-white/5 ring-1 ring-white/10">
              {/* <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" /> */}
            </div>
            <dt className="mb-5 font-semibold">Quick Links</dt>
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link to="">Courses</Link>
              </li>
              <li>
                {" "}
                <Link to="">Faq</Link>
              </li>
              <li>
                {" "}
                <Link to="">Document</Link>
              </li>
              <li>
                <Link to="">Support</Link>
              </li>
              <li>
                <Link to="">Resourses</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <dt className="font-semibold">Join our newsletter.</dt>

            <div className="mt-6 flex flex-col min-w-full gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#18B3C7] px-3.5 py-2.5 my-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto max-w-7xl mt-5 px-5 lg:px-10 xl:px-10 2xl:px-10">
        <div className="flex gap-5">
          <span>Terms of Use</span>
          {/* <Divider orientation="vertical" flexItem /> */}
          <span>Privacy Policy</span>
        </div>
        <div>
          <span>© 2023 All Rights Reserved to Intereactive Care</span>
        </div>
      </div>
    </div>
  );
}
