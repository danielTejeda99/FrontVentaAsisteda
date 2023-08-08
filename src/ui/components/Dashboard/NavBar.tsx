import React from 'react';
import { Dropdown, Navbar } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import Logo from '@/assets/logo.svg'
import { ReactSVG } from 'react-svg'

const NavBar = () => {
    return (
        <Navbar
            fluid
            rounded
            className='border text-black'
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Avatar
                    alt="avatar of Jese"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                />
            </div>

        </Navbar>
    )
}

export default NavBar;