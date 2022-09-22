import React from "react";
import image from "../assets/arrow.svg";

function Contact() {
  return (
    <div className=" flex flex-col bg-base-200 pb-14">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl px-4 font-bold">want to Contact ?</h1>
            <div className=" pb-7">
              <p className=" inline-block py-6 px-5 text-xl">Drop me a mail</p>{" "}
              <img width="40" src={image} alt="" className="inline-block" />
            </div>
            <button className="btn btn-primary">
              {" "}
              <a href="mailto: abhisheksonwane57@gmail.com">
                abhisheksonwane57@gmail.com
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
