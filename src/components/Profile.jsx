import { Link, useNavigate } from "react-router-dom";
import { ARROW, BACK, LOGOUT_PIC, PROFILE_PIC } from "../utils/links";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { removeMode } from "../utils/modeSlice";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <div className="flex justify-between bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-slate-900 dark:to-slate-7000 pt-10 pb-10 ">

        <Link to="/browse" className="flex items-start justify-center">
          <img className="h-8 m-2 rounded-full mo:h-14 transition-transform duration-500 hover:scale-110 hover:shadow-lg" alt="back" src={BACK} /> 
        </Link>

        <div className="w-[320px] flex flex-col items-center justify-center">
          <img alt="ppic" src={PROFILE_PIC} />
          <h1 className="text-lg text-center">{user.displayName}</h1>
        </div>
        <button className="flex items-start justify-center" onClick={logout}>
          <img className="h-8 mo:h-14 m-2 rounded-full transition-transform duration-500 hover:scale-110 hover:shadow-lg" rel="logoutPic" src={LOGOUT_PIC} />
        </button>
      </div>

      <div className="grid mo:grid-cols-3 grid-cols-1 gap-2 dark:bg-slate-400 mo:pt-20">
        {[
          { name: "My Task", href: "#" },
          { name: "My Community", href: "#" },
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
          { name: "Contact Us", href: "#"}
        ].map((link) => (
          <h1 key={link.name} className="dark:text-gray-200 dark:bg-slate-800 bg-slate-300 m-4 p-5 text-center justify-between flex items-center rounded-md h-16">
            {link.name} 
            <img className="h-5" alt="icon" src={ARROW} /> 
          </h1>
        ))}
      </div>
      <div className="dark:bg-slate-400 h-24">

      </div>
    </div>
  );
};

export default Profile;