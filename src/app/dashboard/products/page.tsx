
'use client'
import { ProductForm } from '@/ui/components'
import ProductController from '@/controllers/product.controller'
import CustomModal from '@/ui/modals';
import { PlusComponent, FileText } from '@/ui/components'
export default function Products() {
    const { itemsHead, plans, handleSubmit, setTypeSubmit, dataProduct, messageModal, showModal, onRequestClose } = ProductController();
    return (
        <div className='p-5 pb-20 space-y-4 text-black'>
            <h1 className='text-c2 text-xl font-sanchez'>Agregar productos</h1>
            <ProductForm itemsHead={itemsHead} dataTable={plans} onSubmit={handleSubmit} setSubmit={setTypeSubmit} data={dataProduct} />
            <CustomModal isOpen={showModal} onClose={onRequestClose}>
                <div className='flex flex-col items-center justify-center text-center space-y-2'>
                    {messageModal.type == 'file' ? <FileText/>: <PlusComponent/>}
                    <h1 className='text-#008296 font-bold'>{messageModal.title}</h1>
                    <p className='text-greenText text-sm'>{messageModal.description}</p>
                </div>
            </CustomModal>
        </div>
    )
}
