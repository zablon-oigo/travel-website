import React from 'react'

function Footer() {
  return (
    <footer className="px-10 py-10 ">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="mb-4 lg:mb-0">
                <h2 className="text-2xl font-bold duration-300 cursor-pointer hover:text-primary">Explore</h2>
            </div>
            <div className="flex gap-x-10">
                <a href="" className="relative font-semibold capitalize lg:text-lg text-md group">
                  home
                <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
                </a>
                <a href="" className="relative font-semibold capitalize group lg:text-lg text-md">
                  about
                  <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
                  </a>
                <a href="" className="relative font-semibold capitalize group lg:text-lg text-md">
                  contact
                  <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
                  </a>
                <a href="" className="relative font-semibold capitalize group lg:text-lg text-md">
                  services
                  <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-primary scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
                  </a>
            </div>
        </div>
        <p className="mt-2 text-xs font-light text-center lg:text-start lg:text-md">Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer