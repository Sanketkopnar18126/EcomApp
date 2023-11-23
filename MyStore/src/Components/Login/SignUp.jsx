import { useState } from "react";

import Loader from "../Loader/Loader";

import {auth} from '../Firebase/Config'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [details, setdetails] = useState({
    email: "",
    password: "",
    Confirmpassword: "",
  });
  
  const [loader,setloader]=useState(false)
  
  const { email, password, Confirmpassword } = details;
  
  const navigate=useNavigate()
  
const onHandleLoader=()=>{
setloader(true)

}


  const onHandleSubmitForm = (e) => {
    e.preventDefault();

if(password!==Confirmpassword)toast.error("confirm pass not matched")
 

onHandleLoader()

  createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
 
    const user = userCredential.user;
console.log(user)
toast.success("Successfully Login...s")


setdetails({
  email:"",
  password:"",
  Confirmpassword:""
})
setloader(false)
navigate('/login')
  })
  .catch((error) => {
    const errorCode = error.code;

    console.log(errorCode)
    const errorMessage = error.message;
setloader(false)
  
  });


}
  return (
<>
{loader&& <Loader/>}
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border-black md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Create New Account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={onHandleSubmitForm}
                action="#"
              >
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
                    onChange={(e) =>
                      setdetails({ ...details, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setdetails({ ...details, password: e.target.value })
                    }
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="confirm password"
                    name="confirm password"
                    id="confirmpassword"
                    value={Confirmpassword}
                    onChange={(e) =>
                      setdetails({
                        ...details,
                        Confirmpassword: e.target.value,
                      })
                    }
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sign In
                </button>
              </form>

        

            </div>
          </div>
        </div>
      </section>

   </>
  );
};
export default SignUp;
