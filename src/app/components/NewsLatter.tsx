import Image from "next/image";
import React from "react";
import SoftwareImg from "public/software-icon.svg";
const NewsLatter = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="min-w-full h-96 px-10  py-5  relative flex items-center rounded-3xl overflow-hidden ">
          <Image
            width={100}
            height={50}
            className="absolute h-full w-full inset-0 object-cover opacity-50 z-[1]"
            src={SoftwareImg}
            alt="banner"
          />
          <div className="relative z-[3] flex flex-col  justify-between gap-10">
            <div className="max-w-md space-y-5">
              <h3 className="text-3xl font-semibold">Let’s keep in touch</h3>
              <p className="text-stone-800 md:text-secondary ">
                Subscribe to keep up with fresh news and exciting updates. We
                promise not to spam you
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="w-full md:w-64 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Email..."
              />
              <button className="px-4 md:px-8 py-3 text-white font-bold bg-primary rounded-md shadow-xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
            <p className="">
              By subscribing, you agree with ConvertKit’s Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
