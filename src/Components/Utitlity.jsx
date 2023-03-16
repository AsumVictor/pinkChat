import React from "react";

export default function Buttons(props) {
  return (
    <button
      className={`py-2 bg-Pink900 cursor-pointer  hover:bg-Pink600 px-4 font-bold text-white rounded-3xl
       ${props.Extend}`}
       onClick={props.Action}
    >
      {props.children}
    </button>
  );
}

export function ButtonOutline(props) {
  return (
    <button
      className={`py-2 border-2 border-Pink900 cursor-pointer bg-white hover:bg-Pink900 px-4 font-bold text-Pink900 
            hover:text-white rounded-3xl ${props.Extend}`}
            onClick={props.Action}
    >
      {props.children}
    </button>
  );
}
