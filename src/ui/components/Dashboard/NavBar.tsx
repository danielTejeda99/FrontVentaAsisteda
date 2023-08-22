import React from 'react';
import { CustomFlowbiteTheme, Dropdown, Navbar, Flowbite } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { HiClipboardList, HiEmojiHappy, HiLockClosed } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme = {
    dropdown:{
        arrowIcon:'hidden'
    }
}


interface Props {
    handleSignout: any; // Una función que se ejecutará cuando se haga clic en el botón de "Cerrar sesión".
    modules: object[];  // Un array de objetos que contiene la información de los módulos del menú.
}


const NavBar: React.FC<Props> = ({ handleSignout, modules }) => {
    return (
        <div className='h-10 flex shrink-0 w-full'>
            <Navbar
            fluid
            rounded
            className='border text-black shadow-md w-full'
        >
            <Navbar.Brand>
                
                <span className="self-start whitespace-nowrap text-xl font-sanchez font-bold dark:text-white text-c2">
                    Portal Clientes
                </span>
            </Navbar.Brand>
            <Flowbite theme={{ theme: customTheme }}> 
            <Dropdown
                inline
                className='font-bold text-center'
                label={<Avatar
                    alt="avatar of Jese"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                />}>
                <Dropdown.Item>
                    <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiEmojiHappy className='w-6 h-6'/>
                    </div>
                    
                    Administrar Perfil
                </Dropdown.Item>
                <Dropdown.Item>
                <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiClipboardList className='w-6 h-6'/>
                    </div>
                    Tareas pendientes
                </Dropdown.Item>
                <Dropdown.Item className='mb-5'>
                <div className='w-10 h-[40px] bg-slate-200 flex items-center justify-center mr-2 rounded-lg'>
                    <HiLockClosed className='w-6 h-6'/>
                    </div>
                    Politica de Privacidad
                </Dropdown.Item>
                <Dropdown.Item onClick={handleSignout} className='rounded-lg mx-2 bg-c1 hover:bg-c1 justify-center'>
                    Cerrar sesión
                </Dropdown.Item>

            </Dropdown>
            </Flowbite>

            

        </Navbar>
        </div>
        
    )
}

export default NavBar;