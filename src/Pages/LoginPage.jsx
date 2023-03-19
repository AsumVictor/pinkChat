import React from "react";
import Buttons, { InputDynamic } from "../Components/Utitlity";
import "../css/login.css";
import { Link } from "react-router-dom";
import loginBgDesktop from "../assets/Images/loginBg.png";
import loginBgMobile from "../assets/Images/loginBgMobile.png";
import Logo from "../assets/Images/Logo.png";

export default function Login() {
 //Submit Form
 function Handlesubmit(event){
    event.preventDefault()
 }

  return (
    <main className="w-full py-10  px-3 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="waves absolute w-full h-full">
     {/* SVG wave path */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path
            fill="#e84393"
            fill-opacity="1"
            d="M0,288L40,240C80,192,160,96,240,80C320,64,400,128,480,170.7C560,213,640,235,720,229.3C800,224,880,192,960,170.7C1040,149,1120,139,1200,138.7C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Forms Elements */}
      <form 
        onSubmit={Handlesubmit}
        className="md:max-w-sm px-3 border-2 border-pink-400 rounded-3xl flex flex-col items-center pb-7"
      >
        <div
          className="avater border-2 mt-10 bg-gray-100 flex justify-center items-center p-2 rounded-full"
          style={{ width: "2.5cm", height: "2.5cm" }}
        >
          <img src={Logo} alt="Avatar" />
        </div>
        <h1 className="mt-3 text-center font-bold text-xl text-Pink900">
          Hello Again! 😘
        </h1>
        <p className="text-center mt-3 px-2 text-gray-600 font-bold">
          Please enter your login information below to access your account.
        </p>
        <InputDynamic
          type="text"
          name="userName"
          label="Email or Username"
          InputParentExtendClass="mt-10"
        />
        <InputDynamic
          type="password"
          name="Password"
          label="password"
          InputParentExtendClass="mt-10"
        />
        <Link className="self-start text-blue-600 underline">
          Forgot Password
        </Link>
        <Buttons Extend="mt-10 text-lg px-20">Login</Buttons>
        <p className="mt-10 self-start">
          I'm new.{" "}
          <Link className="underline text-blue-800 font-bold">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}
