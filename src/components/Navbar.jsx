import PropTypes from "prop-types";
import { PROFILE_PIC } from "../utils/links";
import { useSelector } from "react-redux";

const NavigationBar = ({ toggleNav=()=>{} }) => {
    const user = useSelector((store)=>store.user);

    return (
        <div className="fixed top-0 left-0 h-full dark:bg-gray-900 dark:text-white bg-slate-400 text-gray-800 w-64 transition-transform duration-300 ease-in-out">
            <button
                className="absolute top-4 right-4 text-3xl"
                onClick={toggleNav}
                aria-label="Close navigation"
            >
                &times;
            </button>
            <nav className="mt-16 space-y-4 px-6">
                <div className="flex p-2 items-center pl-0">
                    <img className="w-20 pr-2" alt="ppic" src={PROFILE_PIC} />
                    <h1>{user.displayName}</h1>
                </div>
                
                {[
                    { name: "My Task", href: "#" },
                    { name: "My Community", href: "#"  },
                    { name: "Leader Board", href: "#" },
                    { name: "Chat", href: "#" },
                    { name: "Course", href: "#" },
                    { name: "Knowledge", href: "#" },
                    { name: "Poll", href: "#" },
                    { name: "Contribution", href: "#" },
                    { name: "Quiz", href: "#" },
                    { name: "Update", href: "#" },
                    { name: "Downloads", href: "#" },
                    { name: "News", href: "#" },
                    { name: "FAQs", href: "#" },
                    { name: "Settings", href: "#" },
                ].map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="block text-xl hover:text-blue-500 hover:dark:text-blue-900">
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
    );
};

NavigationBar.propTypes = {
    toggleNav: PropTypes.func,
  };
export default NavigationBar;