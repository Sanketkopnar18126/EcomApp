import { NavLink, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from'../Firebase/Config'
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Login = () => {


  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginDetails;


  const [loader,setloader]=useState(false)



  const onHandleLoader=()=>{

    setloader(true)
  }


const navigate=useNavigate()

  const onHandlesubmitForm=(e)=>{
    e.preventDefault()

onHandleLoader()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
    toast.success("sucessfull login....")

 navigate('/')

 setloader(false)
 setloginDetails({
  email:"",
  password:"",
 })

    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)

      const errorMessage = error.message;
      console.log(errorMessage)
      setloader(false)
    });
  }

  return (
    <>
    {loader && <Loader/>}
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border-black md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Sign in to your account
              </h1>
              <form onSubmit={onHandlesubmitForm}  className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setloginDetails({...loginDetails,email:e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setloginDetails({...loginDetails,password:e.target.value})}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={"/forgotpass"}
                    element={<ForgotPass />}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-800"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sign In
                </button>
                <p className="text-sm ">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to={"/signup"}
                    element={<SignUp />}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500  text-blue-800"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default Login;
