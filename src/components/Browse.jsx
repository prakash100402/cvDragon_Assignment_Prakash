import { useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import Header from "./Header";
import NavigationBar from "./Navbar";

const Browse = () => {
  const [isOpen, setIsOpen] = useState(false);
  useFetchData();


  return (
    <div className="flex h-screen">
    {isOpen && <NavigationBar toggleNav={() => setIsOpen(false)} />}
    <div
      className={`flex-1 transition-all duration-300 ease-in-out ${
        isOpen ? "ml-64 bg-gray-800/50 dark:bg-slate-500" : "ml-0 bg-white dark:bg-slate-600"
      }`}>
      <Header openNav={() => setIsOpen(true)} />
    <div>
      <h1>Tasks</h1>

    </div>
    <div>
      <h1>Events</h1>

    </div>
    <div>
      <h1>Updates</h1>

    </div>
    <div>
      <h1>Birthdays</h1>

    </div>
    <div>
      
    </div>

    </div>
  </div>
  );
};

export default Browse;
