import React,{useState} from 'react'
import {FaArrowRight,FaCalendarAlt,FaSearch} from 'react-icons/fa'
import { FaLocationPin,FaPerson} from "react-icons/fa6";
function Hero() {
    const[active,setActive]=useState("Hostelry")
  return (
    <>
    <div className='container px-6 pt-12 mx-auto'>
        <div className="raltive rounded-2xl lg:pb-32 lg:h-[70vh]">
            <div className="relative w-full h-full overflow-hidden">
                <img src="" alt="" className="lg:absolute top-0 w-full lg:h-[20vh] h-[30rem] object-cover rounded-2xl " />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
                <h1 className="flex justify-center mx-auto mt-16 text-4xl font-bold text-center text-white lg:w-4/5">
                    Explore the whole world and enjoy its beauty
                </h1>
                <p className="flex justify-center px-6 mt-5 text-center">
                    Find and write about your experiences around the world
                </p>
            </div>
            <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
                <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
                    <div className="gap-4 lg:flex gap-x-2">
                        <div className="flex flex-wrap w-full gap-x-16">
                        <div className="">
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Hostelry" ? "text-black border-b-2 border-solid border-black":"text-light"}`} onClick={()=> setActive("Hostelry")}>Hostelry</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Flights" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Flights")}>Flights</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Bus & Shuttle" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Bus & Shuttle")}>Bus & Shuttle</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Cars" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Cars")}>Cars</button>
                            
                        </div>
                        <button className="">
                            Last Searching
                            <FaArrowRight/>
                        </button>
                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaLocationPin/>
                            <input type='text' placeholder="Bali, Indonesia"/>

                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaCalendarAlt/>
                            <input type='date' defaultValue={"2023-04-11"} placeholder="Bali, Indonesia"/>

                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaCalendarAlt/>
                            <input type='date' defaultValue={"2023-04-11"} placeholder="Bali, Indonesia"/>

                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaPerson/>
                            <input type='text' placeholder="1 Room, 2 Guest"/>

                        </div>
                        <div className="">
                            <button className="">
                                <FaSearch/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero