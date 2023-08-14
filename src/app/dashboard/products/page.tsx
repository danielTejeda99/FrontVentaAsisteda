
'use client'
import { ProductForm } from '@/ui/components'
import ProductController from '@/controllers/product.controller' 
export default function Products() {
    const {itemsHead,plans, handleSubmit, setTypeSubmit, dataProduct} = ProductController();
    return (
        <div className='p-5'>
            <h1>Agregar productos</h1>
            <ProductForm itemsHead={itemsHead} dataTable={plans} onSubmit={handleSubmit} setSubmit={setTypeSubmit} data={dataProduct}/>
        </div>
    )
}
