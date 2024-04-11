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
          <a href="" className="text-lg font-bold capitalize text-primary">explorer</a>
        </div>
      </div>
      <div className="flex items-center text-lg capitalize xl:gap-12 gap-x-4 max-lg:hidden">
        <a href="" className="leading-normal text-black no-underline hover:text-black ">home</a>
        <a href="" className="leading-normal text-black no-underline hover:text-black ">ticket</a>
        <a href="" className="leading-normal text-black no-underline hover:text-black ">explore</a>
        <a href="" className="leading-normal text-black no-underline hover:text-black ">activity</a>
      </div>
      <div className="flex gap-4 max-lg:hidden">
        <button className="h-12 px-6 text-base duration-300 bg-transparent rounded shadow outline-none cursor-pointer text-light hover:bg-primary hover:text-white transition-bg hover:border hover:border-primary ">Sign In</button>
        <button className="h-12 px-6 text-base text-white duration-300 rounded shadow outline-none cursor-pointer bg-primary hover:bg-white hover:text-primary ">Sing Up</button>
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
            <div className="fixed w-full transition-all lg:hidden top-24 bg-primary">
              <div className="flex flex-col items-baseline w-full gap-4">
               <div className="">
               <a href="" className="">home</a>
                <a href="" className="">ticket</a>
                <a href="" className="">explore</a>
                <a href="" className="">activity</a>
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