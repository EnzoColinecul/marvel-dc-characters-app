import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/mdc.png'

const NavBar = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/marvel'>
              <img className="h-8 w-auto sm:h-16 " src={Logo} alt="mdc" />
            </Link>
            <h1 className="text-lg font-bold self-center pointer-events-none subpixel-antialiased">Characters App</h1>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-8 items-center ">
            <NavLink exact to='/marvel' activeClassName='text-gray-900' className="text-base font-medium text-gray-500 hover:text-gray-900">
              Marvel
              </NavLink>
            <NavLink exact to='/dc' activeClassName='text-gray-900' className="text-base font-medium text-gray-500 hover:text-gray-900">
              DC
              </NavLink>
            <div className="relative">
              <input type="search" className=" hidden md:flex bg-purple-white shadow rounded border-0 py-2 pb-2 pl-1 " placeholder="Search hero..." />
            </div>
            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end  lg:w-18">
            <NavLink exact to='/login' className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-700 via-red-600 to-blue-600 transform hover:scale-110 hover:text-gray-200">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="flex justify-start">
                <img className="h-10 w-auto" src={Logo} alt="logo" />
                <h1 className="text-sm font-bold self-center pointer-events-none ">Characters App</h1>
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>
            </div>
            <div>
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-700 via-red-600 to-blue-600">
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="bg-gradient-to-r text-red-500 hover:text-red-700">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
