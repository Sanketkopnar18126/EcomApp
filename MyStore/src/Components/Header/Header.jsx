import { NavLink, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Cart from "../Cart/Cart";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Config";
import { toast } from "react-toastify";

const Header = () => {

const navigate=useNavigate()


  
const  onHandleLogout=()=>{

  signOut(auth).then(() => {
toast.success("Succesfully Logout.....")
navigate("/")
  }).catch((error) => {
toast.error("Some error occur")
console.log(error)
  });

}
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              My Store
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/"}
                  element={<Home />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Home
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/about"}
                  element={<About />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  About
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/contactus"}
                  element={<ContactUs />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Contact Us
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/admin"}
                  element={<Admin />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Admin
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/login"}
                  element={<Login />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Login
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page" onClick={onHandleLogout}
              >
                <NavLink
                  to={"/logout"}
                  element={<Logout />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Logout
                </NavLink>
              </li>

              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink
                  to={"/cart"}
                  element={<Cart />}
                  className={(e) => (e.isActive ? "underline" : "none")}
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
