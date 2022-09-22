import React from "react";
import "../app.css";
// import spotifySvg from './spotify-icon.svg'
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login grid place-content-center h-screen pb-14 text-center">
      <div className=" p-10 max-w-2xl">
        <h1 className="text-5xl font-bold">Get your favourite Podcasts!</h1>

        {/* <h1>{window.location.href}</h1> */}
        <p className="py-6">
          Showing you all the podcasts and episodes available on spotify API.
          <br /> This project is under development.
        </p>
      </div>

      <a href={loginUrl}>
        <button className="  btn gap-2 font-medium">
          <svg
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1333.33 1333.3"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z"
              fill="#1ed760"
              fill-rule="nonzero"
            />
          </svg>
          Login from spotify
        </button>
      </a>
    </div>
  );
}

export default Login;
