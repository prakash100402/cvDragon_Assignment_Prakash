import { useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import Header from "./Header";
import NavigationBar from "./Navbar";
import QuickLinks from "./QuickLinks";
import Birthday from "./Birthday";
import Updates from "./Updates";
import Events from "./Event";
import Tasks from "./Task";

const Browse = () => {
  const [isOpen, setIsOpen] = useState(false);
  useFetchData();

  return (
    <div className="flex h-screen w-screen ">
      {isOpen && <NavigationBar toggleNav={() => setIsOpen(false)} />}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? " bg-gray-800/50 dark:bg-slate-500" : " bg-white dark:bg-slate-600"
          }`}>
        <Header openNav={() => setIsOpen(true)} />

        <div className="w-screen bg-white dark:bg-slate-600">
          <h1 className="lo:text-2xl dark:text-slate-300 cursor-default p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700">Tasks</h1>
          <div className="w-screen ">
            <Tasks/>
          </div>
          
        </div>

        <div className=" bg-white dark:bg-slate-600">
          <h1 className="lo:text-2xl dark:text-slate-300 cursor-default p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700">Events</h1>
          <div className="w-screen overflow-x-scroll">
            <Events/>
          </div>
        </div>

        <div className=" bg-white dark:bg-slate-600">
          <h1 className="lo:text-2xl dark:text-slate-300 cursor-default p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700">Updates</h1>
          <div className="w-screen overflow-x-scroll">
            <Updates />
          </div>
        </div>

        <div className=" bg-white dark:bg-slate-600">
          <h1 className="lo:text-2xl dark:text-slate-300 cursor-default p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700">Birthdays</h1>
          <div className="w-screen overflow-x-scroll">
            <Birthday />
          </div>
        </div>

        <div className=" bg-white dark:bg-slate-600 h-[200px]">
          <QuickLinks />
        </div>

      </div>
    </div>
  );
};

export default Browse;
