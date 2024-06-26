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
            <div className="bg-white px-4 py-2 rounded-[10px] lg:absolute bottom-0 lg:w-4/5 shadow-lg ">
                    
                        <div className="flex flex-wrap justify-center w-full gap-x-16">
                        
                           
                           <button className={`rounded-sm   focus:outline-none h-10 lg:text-base text-xs cursor-pointer bg-transparent whitespace-pre ${active === "Hostelry" ? "text-black border-b-2 border-solid border-black":"text-light"}`} onClick={()=> setActive("Hostelry")}>Hotel</button>
                            <button className={`rounded-sm   focus:outline-none h-10 lg:text-base text-xs cursor-pointer bg-transparent whitespace-pre ${active === "Flights" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Flights")}>Flights</button>
                            <button className={`rounded-sm   focus:outline-none h-10 lg:text-base text-xs cursor-pointer bg-transparent whitespace-pre ${active === "Bus & Shuttle" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Bus & Shuttle")}>Bus & Shuttle</button>
                            <button className={`rounded-sm   focus:outline-none h-10 lg:text-base text-xs cursor-pointer bg-transparent whitespace-pre ${active === "Cars" ? "text-black border-b-2 border-solid border-black":"text-light"}`}  onClick={()=> setActive("Cars")}>Cars</button>
                           
                          
                            
                        
                        <button className="flex items-center gap-2 text-xs whitespace-pre bg-transparent border-none outline-none lg:text-md text-light">
                            Last Searching
                            <FaArrowRight/>
                        </button>
                        </div>
                    
                    <div className="">
                    <div className="border-t border-solid ">
                        <div className="">
                        <p className="text-xs md:text-lg text-light">Destination</p>
                        
                        </div>
                        <section className="grid grid-cols-2 gap-2 my-4 lg:grid-cols-5 place-content-center ">
                        <div className="relative flex items-center w-40 h-10">
                            <FaLocationDot className='absolute top-0 bottom-0 z-10 h-full left-2 text-primary'/>
                            <input type='text' placeholder="Bali, Indonesia" className='absolute h-full px-2 py-1 pl-6 text-sm rounded-md outline-none bg-light1'/>

                        </div>
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
                        <div className="flex items-center justify-start w-full h-10 text-white lg:justify-center lg:w-40">
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