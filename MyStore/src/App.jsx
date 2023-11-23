import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Admin from "./Components/Admin/Admin";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ForgotPass from "./Components/Login/ForgotPass";
import SignUp from "./Components/Login/SignUp";
import { ToastContainer } from "react-toastify";
import Logout from "./Components/Logout/Logout";
import { Provider } from "react-redux";
import { Store } from "./Store/Store/store";




function App() {
  return (
    <>
   <ToastContainer style={{position:"absolute",top:"120px",right:"18px"}}/>
    <Provider store={Store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgotpass" element={<ForgotPass/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>

   </>
  );
}

export default App;
