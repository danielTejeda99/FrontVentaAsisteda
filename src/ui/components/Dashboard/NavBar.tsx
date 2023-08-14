import React from 'react';
import { Dropdown, Navbar } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { HiClipboardList, HiEmojiHappy, HiLockClosed } from 'react-icons/hi';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';

interface Props {
    handleSignout: any; // Una función que se ejecutará cuando se haga clic en el botón de "Cerrar sesión".
    modules: object[];  // Un array de objetos que contiene la información de los módulos del menú.
}


const NavBar: React.FC<Props> = ({ handleSignout, modules }) => {
    return (
        <Navbar
            fluid
            rounded
            className='border text-black shadow-md relative'
        >
            <Navbar.Brand>
                
                <span className="self-start whitespace-nowrap text-xl font-sanchez font-bold dark:text-white text-c2">
                    Portal Clientes
                </span>
            </Navbar.Brand>

            <Dropdown
                inline
                className='font-bold text-center'
                label={<Avatar
                    alt="avatar of Jese"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                />}>
                <DropdownItem>
                    <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiEmojiHappy className='w-6 h-6'/>
                    </div>
                    
                    Administrar Perfil
                </DropdownItem>
                <DropdownItem>
                <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiClipboardList className='w-6 h-6'/>
                    </div>
                    Tareas pendientes
                </DropdownItem>
                <DropdownItem className='mb-5'>
                <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiLockClosed className='w-6 h-6'/>
                    </div>
                    Politica de Privacidad
                </DropdownItem>
                <DropdownItem onClick={handleSignout} className='rounded-lg mx-2 bg-c1 hover:bg-c1 justify-center'>
                    Cerrar sesión
                </DropdownItem>

            </Dropdown>

        </Navbar>
    )
}

export default NavBar;