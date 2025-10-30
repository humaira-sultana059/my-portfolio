"use client"

import React from "react"

const Button = () => {
  return (
    <button
      className="group relative inline-block cursor-pointer outline-none border-0 
                      bg-transparent p-0 text-inherit font-inherit w-48 max-md:w-34 h-auto"
    >
      <a href="#contact">
        {/* Circle with arrow */}
        <span
          className="group-hover:shadow-[0_0_10px_2px_white] group-active:shadow-[0_0_5px_0.5px_white] group-active:scale-90
                      transition-all duration-500 ease-in-out
                      shadow-[0_0_5px_1px_white] relative block m-0
                      w-12 h-12 max-md:w-6 max-md:h-6 bg-black border border-pink-900 rounded-full
                      group-hover:w-full"
        >
          <span
            className="group-hover:translate-x-36 group-active:translate-x-38 max-md:group-hover:translate-x-22 max-md:group-active:translate-x-24 group-active:transition-all group-active:duration-300
                        transition-all duration-500 ease-in-out
                        absolute top-0 bottom-0 m-auto
                        left-4.5 group-hover:w-4.5 h-0.5
                        group-hover:bg-white bg-white/70
                        before:content-[''] before:absolute before:-top-1 before:right-0.9 max-md:before:right-0.5 
                         
                        before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 
                        before:border-white before:rotate-45"
          ></span>
        </span>

        {/* Button text */}
        <span
          className="group-hover:text-white group-active:text-white/50 group-hover:-translate-x-7 max-md:group-hover:-translate-x-5
                      transition-all duration-500 ease-in-out
                      absolute top-0 left-0 right-0 bottom-0
                      py-3 max-md:py-0 mx-0 ml-7 max-md:ml-3 text-white/50
                      font-bold leading-6 text-center "
        >
          Let's Talk
        </span>
      </a>
    </button>
  )
}

export default Button
