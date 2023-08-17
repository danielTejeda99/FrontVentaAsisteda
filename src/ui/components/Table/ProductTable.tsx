import {BiCheck} from "react-icons/bi";
import {FcCancel, FcOk} from "react-icons/fc";
import {HiPencil} from "react-icons/hi2";

interface Props {
    data: object[];

    [x: string]: any;
}


export default function ProductTable({data, editProduct}: Props) {

    return (<>
        <div className="w-full flex flex-col space-y-2">
            {
                data.map((item: any, index: number) => (

                    <div
                        key={index}
                        className="hover:shadow-lg flex flex-row max-md:flex-col rounded-lg border-[1px] md:h-[46px]  justify-between items-center border-gray-300 py-[12px] px-[16px] "
                    >
                        <div className="flex flex-row max-md:flex-col">
                            <label className="font-bold w-[126px]">{item.productCode}</label>
                            <label className=" font-bold w-[126px">{item.description}</label>
                        </div>
                        <div className={`flex flex-row space-x-9`}>
                            <div className="font-bold flex flex-row items-center w-[92px] space-x-2">{item.isActive ?
                                <><FcOk className=""/><label>ACTIVO</label> </> :
                                <><FcCancel className=""/> <label> INACTIVO</label></>}</div>

                            <label onClick={() => {
                                editProduct(item)
                            }}
                                   className="w-[72px] font-bold  flex flex-row items-center space-x-3 underline decoration-black hover:cursor-pointer">Editar <HiPencil
                                className="inline"/></label>
                        </div>

                    </div>
                ))
            }

        </div>

    </>);
}