import React from 'react';
import Link from 'next/link'
import { Sidebar } from 'flowbite-react';
import { BiLogOut } from 'react-icons/bi';


// Definimos una interfaz llamada Props que describe las propiedades que acepta el componente.
interface Props {
    handleSignout: any; // Una función que se ejecutará cuando se haga clic en el botón de "Cerrar sesión".
    modules: object[];  // Un array de objetos que contiene la información de los módulos del menú.
}

// Declaramos el componente funcional Menu, que acepta las propiedades especificadas en la interfaz Props.
const Menu: React.FC<Props> = ({ handleSignout, modules }) => {

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className='hidden w-25 md:block border'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {modules.map((item: any, index) => (
                        // Iteramos sobre el array de módulos y mostramos cada módulo como un elemento de lista.
                        // Si el módulo tiene un 'patch' (ruta) definido, lo envolvemos en un enlace usando el componente Link de Next.js.
                        // Cuando se hace clic en el enlace, el usuario será dirigido a la ruta especificada en 'item.patch'.
                        // Mostramos el texto del módulo en el enlace ('item.description').
                        // Nota: Usamos 'key={index}' para proporcionar una clave única a cada elemento de la lista, lo cual es necesario cuando se hace uso de map().

                        <div key={index}>
                            {item.children.length > 0 ?
                                <Sidebar.Collapse
                                    icon={item.icon}
                                    label={item.description}
                                >
                                    {item.children.map((child: any, index:number) => (
                                        <Sidebar.Item
                                            icon={child.icon}
                                            key={index}
                                        >
                                            <Link href={child.path}>{child.description}</Link>
                                        </Sidebar.Item>
                                    ))}
                                </Sidebar.Collapse>
                                :
                                <Sidebar.Item
                                    icon={item.icon}
                                >
                                    <Link href={item.path}>{item.description}</Link>
                                </Sidebar.Item>}

                        </div>
                    ))}
                    <Sidebar.Item
                    >
                        
                        <BiLogOut className="mr-2 h-5 w-5 inline" />
                        <span onClick={handleSignout}>Cerrar sesión</span>
                    </Sidebar.Item>



                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default Menu;