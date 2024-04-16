import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import image from '../assets/splash.jpg'
import beach from '../assets/beaches.jpg'
import beach2 from '../assets/beaches2.jpg'
import beach3 from '../assets/beaches3.jpg'
function Card() {
    const Card=({image,text,location})=>{
        return(
            <div className="">
                <div className="relative mx-auto my-0 overflow-hidden rounded-2xl">
                    <img src={image} alt="" className="rounded-2xl lg:w-[300px] w-full h-[300px] box-border" />
                    <p className="absolute p-1 text-sm bg-white rounded-lg top-4 right-4">20% off</p>
                </div>
                <div className="">
                    <h5 className="pt-2 font-light text-md">{text}</h5>
                    <div className="flex items-center gap-2 py-3">
                        <HiLocationMarker size={24} className='text-primary'/>
                        <p className="text-gray text-light">{location}</p>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <>
    <div className='container px-3 mx-auto'>
        <section className="pt-16">
            <div className="">
                <div className="justify-between text-center lg:flex">
                    <span className="">
                        <h2 className="text-4xl">Popular Places</h2>
                        <p className="py-4">Let&apos;s enjoy this heaven on earth</p>
                    </span>
                    <p className="text-light lg:w-2/5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto.
                    </p>
                </div>
                <div className="relative z-10 grid grid-cols-1 gap-6 my-12 xl:grid-cols-4 md:grid-cols-2">
                <Card image={beach} text={'Exploring the majestic peaks and tranquil valleys, finding solace in nature\'s embrace.'} location={'Rocky Mountains, Canada'}/>
                <Card image={beach2} text={'Wandering through ancient forests, where every rustle speaks of secrets untold.'} location={'Pacific Northwest, USA'}/>
                <Card image={beach3} text={'Venturing into the vast desert sands, where time seems to stand still under the blazing sun.'} location={'Sahara Desert, Africa'}/>
                <Card image={beach} text={'Diving into the depths of the ocean, discovering a world of wonders beneath the waves.'} location={'Great Barrier Reef, Australia'}/>

                </div>
            </div>
        </section>
        <section className="px-4 py-16 lg:px-12">
            <span className="flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold lg:text-4xl">Travel to make sweet memories</h2>
                <p className="text-gray-500">Find trips that fit a flexible lifestyle</p>
            </span>
            <div className="flex flex-col-reverse items-center justify-between py-6 lg:flex-row gap-y-4">
            <div className="lg:w-2/5">
                <div className="">
                    <span className="bg-[#7bbbde] text-white px-3 py-1 rounded-xl">01</span>
                    <h2 className="py-4 text-lg font-bold">Discover Exciting Destinations</h2>
                    <p className="pb-6 text-light lg:w-1/2">
                        Explore a wide range of destinations tailored to your interests and preferences. From bustling cities to serene natural wonders, find the perfect getaway for your next adventure.
                    </p>
                </div>
                <div className="">
                    <span className="bg-[#8196e9] text-white px-3 py-1 rounded-xl">02</span>
                    <h2 className="py-4 text-lg font-bold">Plan Memorable Experiences</h2>
                    <p className="pb-6 text-light lg:w-1/2">
                        Dive into unique experiences curated by local experts. Whether you're seeking adrenaline-pumping activities or tranquil retreats, we have something for every traveler.
                    </p>
                </div>
                <div className="">
                    <span className="px-3 py-1 text-white bg-primary rounded-xl">03</span>
                    <h2 className="py-4 text-lg font-bold">Travel with Confidence</h2>
                    <p className="pb-6 text-light lg:w-1/2">
                        Rest easy knowing that your journey is supported by our reliable guides and resources. From travel tips to safety recommendations, we're here to ensure your trip is smooth and worry-free.
                    </p>
                </div>
            <div className="flex justify-center md:justify-start">
                <button className="px-6 py-3 my-8 text-white shadow bg-primary transition-bg hover:bg-white hover:text-primary rounded-xl">Start Exploring</button>
            </div>
            </div>

                <div className="lg:h-[70vh] h-[30vh] lg:w-3/4 rounded-2xl">
                    <img src={image} alt="" className="object-cover object-center w-full h-full rounded-2xl" />
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Card