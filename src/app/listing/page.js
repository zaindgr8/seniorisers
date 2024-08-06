"use client";
import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Agent-Sidebar";

const Page = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-10 w-full">
          <div className="flex space-x-6 m-2 p-2 bg-gray-100 rounded-md shadow-sm w-full">
            <h1 className="pt-0.5">Dashboard</h1>
            <p>Company Name</p>
          </div>
          <div className="flex space-x-6 m-2 p-2 bg-gray-100 rounded-md shadow-sm w-full">
            <button className="pt-0.5">Business Profile</button>
            <button className="pt-0.5">Business Profile</button>
          </div>
          <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2">
            <div className=" flex  space-x-4 justify-center">
              <div className="  w-[40%]">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="  w-[40%]">
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className=" flex  mt-12 space-x-4 justify-center">
              <div className="  w-[40%]">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="  w-[40%]">
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="flex mt-12 space-x-4 justify-center">
              <div className="w-[40%]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 pb-4 text-sm font-medium text-gray-900 dark:text-white border-b-2 border-gray-300"
                >
                  First name
                </label>
              </div>
              <div className="w-[40%]">
                <label
                  htmlFor="last_name"
                  className="block mb-2 pb-4 text-sm font-medium text-gray-900 dark:text-white border-b-2 border-gray-300"
                >
                  Last name
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <div className="text-center">
          © 2023 Seniorisers - All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Page;
