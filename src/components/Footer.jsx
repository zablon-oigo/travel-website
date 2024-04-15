import React from 'react'

function Footer() {
  return (
    <footer className="px-10 py-10 ">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="mb-4 lg:mb-0">
                <h2 className="text-2xl font-bold duration-300 cursor-pointer hover:text-primary">Explore</h2>
            </div>
            <div className="flex gap-x-10">
                <a href="" className="text-lg font-semibold capitalize">home</a>
                <a href="" className="text-lg font-semibold capitalize">about</a>
                <a href="" className="text-lg font-semibold capitalize">contact</a>
                <a href="" className="text-lg font-semibold capitalize">services</a>
            </div>
        </div>
        <p className="mt-2 font-light text-md">Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer