import React from 'react'

function Footer() {
  return (
    <footer className="px-10 py-10 ">
        <div className="flex justify-between w-full">
            <div className="">
                <h2 className="text-2xl">Explore</h2>
            </div>
            <div className="flex gap-x-10">
                <a href="" className="text-lg capitalize">home</a>
                <a href="" className="text-lg capitalize">about</a>
                <a href="" className="text-lg capitalize">contact</a>
                <a href="" className="text-lg capitalize">services</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer