'use client'
import {SearchProductForm} from '@/ui/components'
import ProductTable from "@/ui/components/Table/ProductTable";
import {Pagination} from "flowbite-react";
import {useEffect} from "react";
import ProductController from "@/controllers/product.controller";
import DefaultAlert from "@/ui/components/Alert/DefaultAlert";
import {Alert} from "@/types";

export default function EditProductById() {
    const {
        page,
        setPage,
        products,
        getAllProducts,
        searchProduct,
        render,
        showModalEdit,
        setAlert,
        alert
    } = ProductController()
    useEffect(() => {
        getAllProducts().then(r => {
        })
    }, [page])

    useEffect(() => {
        if (alert.alert != Alert.None) {
            setTimeout(() => {
                setAlert({
                    alert: Alert.None, message: ""
                })
            }, 4000)
        }
    }, [alert]);

    return (
        <div className='px-10 py-10 text-black md:px-20'>
            <h1 className='font-bold mb-10 text-lg text-[#0097AE]'>Productos disponibles</h1>
            <SearchProductForm submit={(value: string) => searchProduct(value)}/>
            {
                products.length == 0 || render ? <>
                    <div
                        className="mt-[33px] rounded-lg border-[2px] border-[#E9EAEC] h-[429px] flex justify-center items-center">
                        <p className="font-bold text-[#B2C7D9] text-center">Aún no tienes productos disponibles, puedes
                            agregarlos
                            a la oferta comercial a través de la opción “Agregar productos”</p>
                    </div>
                </> : <>
                    <div
                        className="mt-[33px] rounded-lg md:h-[429px]">
                        <ProductTable data={products} editProduct={showModalEdit}/>

                    </div>
                    <div className="flex mt-[24px] justify-end">
                        <Pagination
                            currentPage={page}
                            onPageChange={page => {
                                setPage(page)
                            }}
                            totalPages={10}
                            layout="pagination"

                            className='mt-3 flex justify-end  '
                        />
                    </div>

                </>
            }

            {alert?.alert != Alert.None ? <div className="mt-8"> <DefaultAlert type={alert.alert} message={alert.message}/></div>
                : <></>}
        </div>
    )
}