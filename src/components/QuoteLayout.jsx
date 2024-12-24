import React, { useState, useEffect } from "react";
import { ChevronLeft, Search, Bell, ChevronDown } from "lucide-react";
import chat from "../assets/chat.png";
import avatars from "../assets/Avatars.png";
import Sidebar from "./Sidebar";

const QuoteLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="flex-1">
          <header className="bg-white border-b p-4 sticky top-0 z-30">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center pl-[50px] lg:pl-[0px]">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg flex items-center"
                >
                  <ChevronLeft
                    className={`transition-transform duration-300 ${
                      isSidebarOpen ? "" : "rotate-180"
                    }`}
                  />

                  {isSidebarOpen && (
                    <span className="ml-2 font-medium">Back</span>
                  )}
                </button>
              </div>

              <div className="flex">
                <div className="flex-1 min-w-[450px] mx-4">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg text-[#000000] text-[14px] border-[2px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Bell className="text-gray-600 cursor-pointer hover:text-gray-800" />
                  <img
                    src={chat}
                    alt="Chat Icon"
                    className="text-gray-600 cursor-pointer hover:text-gray-800"
                  />
                  <div className="flex items-center cursor-pointer">
                    <img src={avatars} className="w-8 h-8 rounded-full " />
                    <span>
                      <ChevronDown className="text-gray-600" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="overflow-x-hidden">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default QuoteLayout;
