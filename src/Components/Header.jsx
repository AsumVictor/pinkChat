import React from "react";
import Logo from ".././assets/Images/Logo.png";
import Buttons, { ButtonOutline } from "./Utitlity";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function WelcomeHeader() {
  return (
    <header className="w-full py-3 px-3 md:px-10 bg-white flex flex-row items-center justify-between fixed top-0 z-50 shadow-md">
      <div className="logo flex flex-row items-center space-x-2">
        <img src={Logo} alt="Logo" width={60} />
        <span className="text-3xl font-semibold">
          <span className="text-Pink900">P</span>ink
          <span className="text-Pink900">C</span>hat
        </span>
      </div>
      <nav className="hidden md:flex flex-row space-x-5 font-semibold">
        <Link className="hover:text-Pink900 hover:underline">About</Link>
        <Link className="hover:text-Pink900 hover:underline">Features</Link>
        <Link className="hover:text-Pink900 hover:underline">Community</Link>
        <Link className="hover:text-Pink900 hover:underline">Help</Link>
      </nav>
      <div className="flex flex-row space-x-5 items-center">
        <Link className="hidden md:block">
          <ButtonOutline Extend="px-2">  Create and Account</ButtonOutline>
        </Link>
        <Link>
          <Buttons Extend="px-10 "><HiArrowRightOnRectangle /> Login</Buttons>
        </Link>
      </div>
    </header>
  );
}
