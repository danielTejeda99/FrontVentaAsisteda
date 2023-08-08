
import { Table } from 'flowbite-react';
import { CustomButton } from '@/ui/components'

interface Props {
    itemHead: string[];
    data: object[];
    [x: string]: any;
}

export default function StripedRows({ itemHead, data, changeStatus,editUser }: Props) {
    return (
        <div className='overflow-auto'>
            <Table >
                <Table.Head>
                    {itemHead.map((item, index) => (
                        <Table.HeadCell key={index}>
                            {item}
                        </Table.HeadCell>
                    ))}
                    
                    <Table.HeadCell>
                        Estado
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Editar
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Activar/Desactivar
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data.map((item: any, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>
                                {item.lastname}
                            </Table.Cell>
                            <Table.Cell>
                                {item.identificationType}
                            </Table.Cell>
                            <Table.Cell>
                                {item.identification}
                            </Table.Cell>
                            <Table.Cell>
                                {item.phone}
                            </Table.Cell>
                            <Table.Cell>
                                {item.address}
                            </Table.Cell>
                            
                            <Table.Cell>
                                <div className="flex items-center">
                                    {item.isActive ? <>
                                        <div className="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                        Activo
                                    </>
                                        :
                                        <>
                                            <div className="w-3 h-3 mr-2 bg-red-500 border rounded-full"></div>
                                            Inactivo
                                        </>
                                    }

                                </div>

                            </Table.Cell>
                            <Table.Cell>
                            <CustomButton title='Editar' onClick={() => editUser(item)} icon='edit'/>
                            </Table.Cell>
                            <Table.Cell>
                                <CustomButton title={item.isActive ? 'Desactivar' : 'Activar'} onClick={() => changeStatus(item)}/>
                            </Table.Cell>

                        </Table.Row>
                    ))}


                </Table.Body>
            </Table>            
        </div>

    )
}


