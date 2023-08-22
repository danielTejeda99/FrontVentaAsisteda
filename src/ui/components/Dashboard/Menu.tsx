import React from 'react'
import Link from 'next/link'
import { Sidebar, Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { SidebarCollapse } from 'flowbite-react/lib/esm/components/Sidebar/SidebarCollapse'
import { SidebarItem } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItem'
import { on } from 'events'

/* const customTheme: CustomFlowbiteTheme = {
    sidebar: {
        collapse: {
            button: 'group text-blue-500',
            icon: {
                open:{
                    off:'',
                    on:'text-blue-500'
                    
                }
            }

        }
    }
} */
/*  button: {
     color: {
         primary: 'bg-red-500 hover:bg-red-600',
     },
 },
};
*/

// Definimos una interfaz llamada Props que describe las propiedades que acepta el componente.
interface Props {
    handleSignout: any // Una función que se ejecutará cuando se haga clic en el botón de "Cerrar sesión".
    modules: object[] // Un array de objetos que contiene la información de los módulos del menú.
}

// Declaramos el componente funcional Menu, que acepta las propiedades especificadas en la interfaz Props.
const Menu: React.FC<Props> = ({ handleSignout, modules }) => {
    return (
        <Sidebar
            aria-label='Sidebar with multi-level dropdown example'
            className='hidden md:block border'
        >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {modules.map((item: any, index) => (
                        // Iteramos sobre el array de módulos y mostramos cada módulo como un elemento de lista.
                        // Si el módulo tiene un 'patch' (ruta) definido, lo envolvemos en un enlace usando el componente Link de Next.js.
                        // Cuando se hace clic en el enlace, el usuario será dirigido a la ruta especificada en 'item.patch'.
                        // Mostramos el texto del módulo en el enlace ('item.description').
                        // Nota: Usamos 'key={index}' para proporcionar una clave única a cada elemento de la lista, lo cual es necesario cuando se hace uso de map().

                        <div key={index}>
                            {item.children.length > 0 ? (
                                <Sidebar.Collapse icon={item.icon} label={item.description}>
                                    {item.children.map((child: any, index: number) => (
                                        <Sidebar.Item icon={child.icon} key={index}>
                                            <div className='flex items-center space-x-2'>
                                                <span className='w-2 h-2 border-2 border-c2 rounded-full'></span>

                                                <Link href={child.path}>{child.description}</Link>
                                            </div>
                                        </Sidebar.Item>
                                    ))}
                                </Sidebar.Collapse>
                            ) : (
                                <Sidebar.Item icon={item.icon}>
                                    <Link href={item.path}>{item.description}</Link>
                                </Sidebar.Item>
                            )}
                        </div>
                    ))}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default Menu
