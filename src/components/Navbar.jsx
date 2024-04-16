import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
import {HiMenuAlt3} from 'react-icons/hi'
function Navbar() {
  const[menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
  return (
    <>
   <nav className="sticky top-0 z-50 flex flex-col items-center justify-center w-full h-24 bg-white">
   <div className='container w-full mx-auto lg:px-3'>
    <div className="flex items-center justify-between w-11/12 h-full mx-auto lg:w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <a href="" className="text-xl font-bold capitalize lg:text-2xl text-primary">explorer</a>
        </div>
      </div>
      <div className="flex items-center text-lg capitalize xl:gap-12 gap-x-4 max-lg:hidden">
        <a href="" className="relative font-semibold leading-normal text-black duration-700 n transition-allo-underline hover:text-light group ">
          home
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
          </a>
        <a href="" className="relative font-semibold leading-normal no-underline transition-all duration-700 text-light hover:text-black group">
          ticket
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
          </a>
        <a href="" className="relative font-semibold leading-normal no-underline transition-all duration-700 text-light hover:text-black group">
          explore
        <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
        </a>
        <a href="" className="relative font-semibold leading-normal no-underline transition-all duration-700 text-light hover:text-black group">
          activity
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
          </a>
      </div>
      <div className="flex gap-4 max-lg:hidden">
        <button className="h-12 px-6 text-base duration-300 bg-transparent rounded shadow outline-none cursor-pointer text-light hover:bg-primary hover:text-white transition-bg hover:border hover:border-primary ">Sign In</button>
        <button className="h-12 px-6 text-base text-white duration-300 rounded shadow outline-none cursor-pointer bg-primary hover:bg-white hover:text-primary ">Sign Up</button>
      </div>
      {menu ? (
        <div className="lg:hidden text-[22px] cursor-pointer text-black" onClick={toggleMenu}>
          <MdClose/>

        </div>
      ):
      (
        <div className="lg:hidden text-[22px] cursor-pointer text-black" onClick={toggleMenu}>
          <HiMenuAlt3/>
        </div>
      )
      }
    </div>
        {
          menu && (
            <div className="fixed w-full transition-all lg:hidden top-20 bg-primary">
              <div className="flex flex-col items-baseline w-full gap-4">
               <div className="flex flex-col justify-center w-full">
               <a href="" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg  hover:text-primary hover:bg-white duration-700 hover:border-b hover:border-primary capitalize text-[15px] border-0 border-b b-[#ffffff1a] border-solid">home</a>
                <a href="" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg  hover:text-primary hover:bg-white duration-700 hover:border-b hover:border-primary capitalize text-[15px] border-0 border-b b-[#ffffff1a] border-solid">ticket</a>
                <a href="" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg  hover:text-primary hover:bg-white duration-700 hover:border-b hover:border-primary capitalize text-[15px] border-0 border-b b-[#ffffff1a] border-solid">explore</a>
                <a href="" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg  hover:text-primary hover:bg-white duration-700 hover:border-b hover:border-primary capitalize text-[15px] border-0 border-b b-[#ffffff1a] border-solid">activity</a>
               </div>
              </div>
            </div>
          )
        }
      </div>
   </nav>
    </>
  )
}

export default Navbar