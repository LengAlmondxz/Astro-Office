import { useState } from "react";
import Navigation from "../components/Navigation.astro";


export const HamburgerToggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="absolute flex sm:hidden left-[80%] top-6 px-1 py-1 rounded-lg shadow-lg bg-slate-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {toggle && (
        <ul className="group/item divide-y divide-white bg-pink-200 px-6 py-5 space-y-2 rounded-lg uppercase font-semibold top-20 left-[80%] absolute text-left">
          <li className="group/menu">
            <a  href="/">Home</a>
          </li>
          <li className="group/menu">
            <a href="/webpages/about">About</a>
          </li>
          <li className="group/menu">
            <a href="/webpages/blog">Blog</a>
          </li>
        </ul>
      )}
    </div>
  );
};
