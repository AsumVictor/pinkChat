import React from "react";

export default function Buttons(props) {
  return (
    <button
      className={`py-2 bg-Pink900 cursor-pointer  hover:bg-Pink600 px-4 font-bold text-white rounded-3xl
      flex flex-row items-center justify-center flex-nowrap ${props.Extend}`}
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
            hover:text-white rounded-3xl flex flex-row items-center justify-center flex-nowrap ${props.Extend}`}
            onClick={props.Action}
    >
      {props.children}
    </button>
  );
}

export function Features(props){
  return(
    <div className="border-4 border-Pink900 py-3 px-3 rounded-3xl relative mt-10 mx-5" style={{width:'250px',}} >
       <div className="rounded-full p-2 bg-Pink900 text-white text-4xl flex 
          absolute border-4 border-white -top-7 left-5 justify-center items-center">
   {props.icon}
       </div>
       <h3 className="font-bold text-Pink900 mt-8 text-2xl">{props.title}</h3>
       <p className="mt-3">{props.description}</p>
    </div>
  )
}
