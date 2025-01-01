import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { PROFILE_PIC } from "../utils/links";

const LoginSignup = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const checkValidation = () => {
        const message = validation(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
           
        //Authentication
        if (!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, { displayName: name.current.value, photoURL: PROFILE_PIC })
                        .then(() => {
                            
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                            navigate("/browse");
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage.substring(9, 16) + "-> " + errorCode.substring(5));
                });
        }
        else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                // eslint-disable-next-line no-unused-vars
                .then((userCredential) => {
                    // const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    //const errorMessage = error.message;
                    setErrorMessage("User Not Found :- " + errorCode.substring(5));
                });
        }
    }

    const switchForm = () => {
        setIsSignIn(!isSignIn);
        setErrorMessage(null);
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center bg-white dark:bg-slate-400 h-screen">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mt-16 items-center rounded-md bg-opacity-75 border-2 bg-slate-300 border-slate-600 text-black dark:bg-slate-800 dark:border-gray-500 dark:text-gray-300 p-2 m-2 max-h-max">
                    <h1 className="text-black dark:text-gray-300 text-4xl p-2 m-2 w-[320px] text-center">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 m-2 rounded w-[320px] bg-opacity-75 border-2 bg-slate-300 border-slate-600 text-black dark:bg-black dark:border-gray-500 dark:text-gray-300 " />}
                    <input ref={email} type="text" placeholder="Email or Mobile number" defaultValue="prakash2002@gmail.com" className="p-4 m-2 rounded w-[320px]  bg-opacity-75 border-2 bg-slate-300 border-slate-600 text-black dark:bg-black dark:border-gray-500 dark:text-gray-300 " />
                    <input ref={password} type="password" placeholder="Password" defaultValue="Sonu@2002" className="p-4 m-2 rounded w-[320px]  bg-opacity-75 border-2 bg-slate-300 border-slate-600 text-black dark:bg-black dark:border-gray-500 dark:text-gray-300 " />

                    <h1 className="text-red-600 w-[320px] text-center p-2">{errorMessage}</h1>

                    <button
                        className="px-8 z-30 m-3 h-[50px]  w-[320px] bg-slate-500 dark:bg-black rounded-md bg-opacity-75 dark:border-white
                        text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 hover:border-2 border-blue-300
                        after:bg-slate-800 dark:after:bg-slate-500 after:left-5 overflow-hidden after:bottom-0
                         after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all 
                         after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl" onClick={checkValidation}>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>

                    <div className="text-black dark:text-gray-300 flex flex-col w-[320px] pt-3 pb-3 text-center">
                        <h1 className="hover:underline cursor-pointer " onClick={switchForm}>{isSignIn ? "Dont have Account? Sign Up Now." : "Already have an Account."}</h1>
                        <Link to="/help" className="pt-3">Need Help?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;