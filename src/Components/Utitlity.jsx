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

export function ButtonOutline2(props) {
  return (
    <button
      className={`py-2 border-2 border-white cursor-pointer bg-transparent hover:bg-white px-4 font-bold text-white 
            hover:text-Pink900 rounded-3xl flex flex-row items-center justify-center flex-nowrap ${props.Extend}`}
      onClick={props.Action}
    >
      {props.children}
    </button>
  );
}

export function Features(props) {
  return (
    <div
      className="border-4 border-Pink900 py-3 px-3 rounded-3xl relative mt-10 mx-5"
      style={{ width: "270px" }}
    >
      <div
        className="rounded-full p-2 bg-Pink900 text-white text-4xl flex 
          absolute border-4 border-white -top-7 left-5 justify-center items-center"
      >
        {props.icon}
      </div>
      <h3 className="font-bold text-Pink900 mt-8 text-2xl">{props.title}</h3>
      <div className="mt-3">{props.description}</div>
    </div>
  );
}

export function Testimonial(props) {
  return (
    <>
      <article className="flex flex-col px-2 py-2 border-2 rounded-2xl border-Pink900">
        <div
          className="overflow-hidden rounded-full self-center border-4 border-Pink900"
          style={{ width: "90px", height: "90px" }}
        >
          <img src="images/black-couple.png" alt="Profile Pic" />
        </div>
        <h4 className="font-bold text-Pink900 text-center">{props.name}</h4>
        <div>
          <span className="text-Pink900 text-2xl">
            <i class="fa fa-quote-left"></i>
          </span>
          <div className="overflow-hidden" style={{ height: "180px" }}>
            {props.message}
          </div>

          <span className="text-Pink900 float-right text-2xl">
            <i class="fa fa-quote-right"></i>
          </span>
        </div>
      </article>
    </>
  );
}
