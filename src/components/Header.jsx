import { useDispatch, useSelector } from "react-redux"
import { HEADER_PROFILE, NAVBAR_ICON, PROFILE_PIC } from "../utils/links"
import { Link, useNavigate } from "react-router-dom";
import Mode from "./Mode"
import PropTypes from "prop-types";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { removeMode } from "../utils/modeSlice";


const Header = ({ openNav=()=>{} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEnter = useSelector((store) => store.user);

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      dispatch(removeMode());
      navigate('/');

    }).catch((error) => {
      console.log(error);
    });
  };


  return (
    <div>
      {userEnter && <div className="flex justify-between bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-slate-900 dark:to-slate-700 mo:hidden p-2">

       <button onClick={openNav} >
          <img className="size-12" alt="navicon" src={NAVBAR_ICON} />
        </button>

        <Link to='/profile' className="size-12" >
          <img className="rounded-full" alt="profilepic" src={HEADER_PROFILE} />
        </Link>

      </div>}

      <div className="flex justify-between h-80 mo:h-28 p-4 pt-8 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-slate-900 dark:to-slate-700">
        <div className="flex flex-row self-end">

          <button onClick={openNav}>
            <img className="size-12 hidden mo:flex " alt="navicon" src={NAVBAR_ICON} />
          </button>

          <img className="size-32 mo:size-20 " alt="Dp" src={PROFILE_PIC} />

          <h1 className="text-center pl-2 pt-10 mo:hidden dark:text-white">{userEnter?.displayName}</h1>

        </div>

        <div className="hidden mo:flex items-center">
        {userEnter && <ul className="hidden gap-4 p-2 m-2 dark:text-slate-300 lo:text-lg  lo:flex ">
          <li className="transition-transform duration-500 hover:scale-110 cursor-pointer">Home</li>
          <li className="transition-transform duration-500 hover:scale-110 cursor-pointer" >LeaderBoard</li>
          <li className="transition-transform duration-500 hover:scale-110 cursor-pointer">Community</li>
          <li className="transition-transform duration-500 hover:scale-110 cursor-pointer">Area</li>
          <li className="transition-transform duration-500 hover:scale-110 cursor-pointer">Chats</li>
        </ul>}

          <Mode />

          {userEnter && <Link to='/profile' className="size-12 ml-5 ">
            <img className="rounded-full" alt="profilepic" src={HEADER_PROFILE} />
          </Link>}

          {userEnter && <button onClick={logout}
            className="ml-4 pl-7 pr-7 h-[50px] rounded-md bg-slate-700 text-white dark:bg-slate-100 dark:text-black 
            hover:bg-slate-600 dark:hover:bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out
            focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            Logout
          </button>}

        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  openNav: PropTypes.func,
};

export default Header;