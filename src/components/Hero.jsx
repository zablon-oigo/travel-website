import React from 'react'
import {FaArrowRight,FaCalendarAlt} from 'react-icons/fa'
import { FaLocationPin,FaPerson} from "react-icons/fa6";
function Hero() {
  return (
    <>
    <div className=''>
        <div className="">
            <div className="">
                <img src="" alt="" className="" />
            </div>
            <div className="">
                <h1 className="">
                    Explore the whole world and enjoy its beauty
                </h1>
                <p className="">
                    Find and write about your experiences around the world
                </p>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <button className="" onClick={()=> setActive("Hostelry")}>Hostelry</button>
                            <button className="" onClick={()=> setActive("Flights")}>Flights</button>
                            <button className="" onClick={()=> setActive("Bust & Shuttle")}>Bus & Shuttle</button>
                            <button className="" onClick={()=> setActive("Cars")}>Cars</button>
                            
                        </div>
                        <button className="">
                            Last Searching
                            <FaArrowRight/>
                        </button>
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
                            <input type='text' placeholder="Bali, Indonesia"/>

                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaCalendarAlt/>
                            <input type='text' placeholder="Bali, Indonesia"/>

                        </div>
                    </div>
                    <div className="">
                        <p className="">Destination</p>
                        <div className="">
                            <FaPerson/>
                            <input type='text' placeholder="Bali, Indonesia"/>

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