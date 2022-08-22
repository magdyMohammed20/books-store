import React from 'react'
import './navbar.css'

function Navbar() {

    const toggleMenu = () => {
        document.getElementById('dropdown-menu').classList.toggle('open-dropdown')
    }

    const toggleOverlay = () => {
        document.getElementsByClassName('search-overlay')[0].style.transform = 'scale(1)'
    }

    const closeSearchOverlay = () => {
        document.getElementsByClassName('search-overlay')[0].style.transform = 'scale(0)'
    }
    return (
        <nav className='shadow relative' style={{ height: '80px' }}>
            <div className='container-lg px-4 lg:px-8 mx-auto h-full'>
                <div className='row flex h-full items-center'>
                    <div className='text-xl font-bold w-20 md:w-24 mr-8'>
                        Booksy
                    </div>
                    <ul className='flex dropdown shadow-lg md:shadow-none bg-white border-t lg:border-0' id='dropdown-menu'>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium text-sm md:text-md lg:text-base hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Intro</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium text-sm md:text-md lg:text-base hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Home</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium text-sm md:text-md lg:text-base hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Pages</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium text-sm md:text-md lg:text-base hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Components</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium text-sm md:text-md lg:text-base hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Templates</a>
                        </li>
                    </ul>

                    <div className='search-and-buy ml-auto flex'>
                        <button className='toggle-dropdown-menu hidden bg-gray-300 w-10 h-10 md:w-12 md:h-12 text-sm md:text-md mr-2 rounded-md transition duration-200 ease-linear hover:bg-gray-400 focus:outline-none' onClick={() => toggleMenu()}>
                            <i className="fa fa-bars" ></i>
                        </button>
                        <button className='bg-gray-300 w-20 h-10 md:w-12 md:h-12 rounded-md text-sm md:text-md transition duration-200 ease-linear hover:bg-gray-400 focus:outline-none' onClick={() => toggleOverlay()}>
                            <i className="fa fa-search"></i>
                        </button>

                        <button className=' w-20 h-10 md:w-12 md:h-12 rounded-md text-sm md:text-md focus:outline-none mx-3' >
                            <i className="fa fa-heart-o fa-lg font-bold" aria-hidden="true"></i>

                        </button>
                        <select class="appearance-none bg-white   p-3 focus:outline-none focus:shadow-outline">
                            <option>EN</option>
                            <option>AR</option>
                        </select>
                        <div className='search-overlay fixed w-full h-full bg-gray-900 left-0 top-0 bg-opacity-75 transform scale-0'>
                            <button className='close-overlay absolute text-white right-0 mt-5 mr-5 border-2 rounded-full transform transition duration-200 ease-in-out hover:scale-110 hover:bg-indigo-600 focus:outline-none' onClick={() => closeSearchOverlay()}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>

                            <form className='absolute w-5/6 lg:w-1/2'>
                                <div className='bg-white px-4 rounded flex items-center'>
                                    <i className='fa fa-search mr-3 text-gray-600'></i>
                                    <input type='search' className='h-100 py-4 flex-1 focus:outline-none' name='search' placeholder='What Are You Looking For ?' />
                                    <button className='text-white py-3 px-6 bg-orange-400 rounded font-medium'>Search</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
