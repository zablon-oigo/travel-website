import React,{useState} from 'react'
import {FaArrowRight,FaCalendarAlt,FaSearch} from 'react-icons/fa'
import { FaLocationDot,FaPerson} from "react-icons/fa6";
import hero from '../assets/hero.jpg'
function Hero() {
    const[active,setActive]=useState("Hostelry")
  return (
    <>
    <div className='container px-6 pt-8 mx-auto lg:pt-12'>
        <div className="relative rounded-2xl lg:pb-32 lg:h-[70vh]">
            <div className="relative w-full h-full overflow-hidden">
                <img src={hero} alt="" className="lg:absolute top-0 w-full lg:h-[60vh] h-[30rem] object-cover rounded-2xl " />
                <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
                <h1 className="flex justify-center mx-auto mt-16 text-4xl font-bold text-center text-white lg:w-4/5">
                    Explore the whole world and enjoy its beauty
                </h1>
                <p className="flex justify-center px-6 mt-5 font-semibold text-center text-white">
                    Find and write about your experiences around the world
                </p>
            </div>
            
            </div>
            
            <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
            <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg flex flex-col justify-center">
                    <div className="gap-4 lg:flex gap-x-2">
                        <div className="flex flex-wrap w-full gap-x-16">
                        <div className="flex justify-between gap-x-16">
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Hostelry" ? "text-black border-b-2 border-solid border-black":"text-light"}`} onClick={()=> setActive("Hostelry")}>Hotel</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Flights" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Flights")}>Flights</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Bus & Shuttle" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Bus & Shuttle")}>Bus & Shuttle</button>
                            <button className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Cars" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Cars")}>Cars</button>
                            
                        </div>
                        <button className="flex items-center gap-2 whitespace-pre bg-transparent border-none outline-none text-light">
                            Last Searching
                            <FaArrowRight/>
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-16">
                    <div className="flex flex-wrap items-start justify-between gap-4 py-4 border-t border-solid">
                        <div className="">
                        <p className="text-lg text-light">Destination</p>
                        <div className="relative flex items-center w-40 h-10">
                            <FaLocationDot className='absolute top-0 bottom-0 z-10 h-full left-2 text-primary'/>
                            <input type='text' placeholder="Bali, Indonesia" className='absolute h-full px-2 py-1 pl-6 text-sm rounded-md outline-none bg-light1'/>

                        </div>
                        </div>
                        <section className="grid grid-cols-4 my-8 ">
                        <div className="relative flex w-40 h-10">
                            <FaCalendarAlt className='absolute top-0 bottom-0 z-10 h-full left-2 text-primary'/>
                            <input type='date' defaultValue={"2023-04-11"} className='absolute h-full px-2 py-1 pl-6 text-sm rounded-md outline-none bg-light1'/>

                        
                        </div>
                        
                        
                        <div className="relative flex items-center w-40 h-10">
                            <FaCalendarAlt className='absolute top-0 bottom-0 z-10 h-full left-2 text-primary'/>
                            <input type='date' defaultValue={"2023-04-11"}
                            className='absolute h-full px-2 py-1 pl-6 text-sm rounded-md outline-none bg-light1'
                            />

                        </div>
                        <div className="relative flex items-center w-40 h-10">
                            <FaPerson className='absolute top-0 bottom-0 z-10 h-full left-2 text-primary'/>
                            <input type='text' placeholder="1 Room, 2 Guest" className='absolute h-full px-2 py-1 pl-6 text-sm rounded-md outline-none bg-light1'/>

                        </div>
                        <div className="flex items-center justify-center w-40 h-10 text-white">
                        <button className="flex items-center h-full gap-2 px-2 duration-300 rounded-lg shadow outline-none bg-primary placeholder:text-white hover:bg-white hover:text-primary transition-bg">
                        <FaSearch/> Search
                                
                            </button>
                        </div> 
                        </section>
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