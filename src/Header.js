import { Link } from "react-router-dom";
import { useState } from "react";
const root = document.getElementById("root");

const Header = () => {
  const [dark, setDark] = useState(false);
  let darkMode = false;
  const handleDarkMode = () => {
    darkMode = !darkMode;
    if (darkMode) {
      root.classList.toggle("dark");
    }
  };
  return (
    //need to change header color
    <div className="sticky top-0 p-4 z-50 bg-white md:bg-white dark:bg-neutral-900 dark:text-neutral-100 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-2xl md:text-4xl hover:text-orange-800">
          <Link to="/">Ay.</Link>
        </h1>
        <ul className="flex p-2 text-lg md:hover:drop-shadow-2xl">
          <li className="m-2 hover:text-orange-800 hidden sm:block">
            <button
              onClick={() => {
                setDark(!dark);
                handleDarkMode();
              }}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </li>
          <li className="m-2 hover:text-orange-800">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 hover:text-orange-800">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="m-2 hover:text-orange-800">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2">
            <Link to="https://www.linkedin.com/in/awhyush/">
              <svg
                className="h-6 dark:fill-neutral-100 hover:fill-orange-800 "
                fill="#000000"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>linkedin</title>{" "}
                  <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>{" "}
                </g>
              </svg>
            </Link>
          </li>
          <li className="m-2 hidden sm:block">
            <Link to="https://leetcode.com/u/awhyush/">
              <svg
                className="h-6 dark:fill-neutral-100 hover:fill-orange-800"
                fill="#000000"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>LeetCode</title>
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
                </g>
              </svg>
              {/* <img
                className="h-6  w-6 md:h-7 md:w-7 hover:shadow-xl "
                src="https://img.icons8.com/?size=256&id=dc6kdToG53HN&format=png"
                alt="LeetCode"
              /> */}
            </Link>
          </li>
          <li className="m-2 hidden sm:block">
            <Link to="https://github.com/awhyush/">
              <svg
                className="h-6 dark:fill-neutral-100 hover:fill-orange-800"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github</title>{" "}
                  <rect width="24" height="24" fill="none"></rect>{" "}
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>{" "}
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

/**
 * <img
                className="h-6  w-6 md:h-7 md:w-7 hover:shadow-xl "
                src="https://img.icons8.com/?size=256&id=12598&format=png"
                alt="GitHub"
              />
 */
