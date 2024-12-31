import { useState } from "react";
import { useDispatch } from "react-redux";
import { modeDark, modeLight } from "../utils/modeSlice";

const Mode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
        isDarkMode ? dispatch(modeLight()) : dispatch(modeDark());
    };
    

    return (
        <label className="relative inline-flex items-center cursor-pointer" >
            <input className="sr-only peer" type="checkbox" onClick={handleClick} />
            <div
                className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none 
                     bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center
                    after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute 
                    before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 
                    before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0
                    peer-checked:before:translate-x-full shadow-md shadow-gray-400 peer-checked:shadow-md 
                    peer-checked:shadow-gray-500 peer-checked:bg-[#383838] after:content-['🌑']
                    after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-1/2 after:right-1 
                    after:-translate-y-1/2 after:w-6 after:h-6 after:opacity-0 after:transition-all 
                    after:duration-700 peer-checked:after:opacity-100 peer-checked:after:translate-x-0" />
        </label>
    );
};

export default Mode;