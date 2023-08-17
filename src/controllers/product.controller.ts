import { PlusComponent, FileText } from '@/ui/components'
import {useState} from "react";
import {createProduct, getProductByCode} from '@/request/products'
import CookiesUtils from "@/utils/cookieUtils";
import {getProducts} from "@/request/product";
import {Alert} from "@/types/index";

interface Plan {
    name: string,
    description: string
    paymentFrequency: string
    descriptionCoverage: string
    FixedInsuredAmount: string
    FixedPremium: string
    AnualPremiumAmount: string
}

interface contentModal {
    title: string;
    description: string;
    type: string
}

interface TypeAlert {
    alert: Alert,
    message: string
}

const mockPlans = [{
    name: 'Plan 01 - Salud',
    description: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae. Tincidunt nunc justo convallis scelerisque quam non vulputate. Quam habitasse blandit vestibulum felis tristique. Volutpat libero commodo nisl amet urna etiam consequat sed. Neque sed est sit enim augue morbi enim risus. Pellentesque amet pretium ac in.',
    paymentFrequency: 'Anual',
    descriptionCoverage: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae.',
    FixedInsuredAmount: '120.000',
    FixedPremium: '100.000',
    AnualPremiumAmount: '150.000.000'
},
    {
        name: 'Plan 01 - Salud',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae. Tincidunt nunc justo convallis scelerisque quam non vulputate. Quam habitasse blandit vestibulum felis tristique. Volutpat libero commodo nisl amet urna etiam consequat sed. Neque sed est sit enim augue morbi enim risus. Pellentesque amet pretium ac in.',
        paymentFrequency: 'Anual',
        descriptionCoverage: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae.',
        FixedInsuredAmount: '120.000',
        FixedPremium: '100.000',
        AnualPremiumAmount: '150.000.000'
    }]

    
export default function ProductController() {
    const token = CookiesUtils.getCookie('token');
    const user: any = CookiesUtils.getCookie('user');

    const [itemsHead, setItemsHead] = useState<string[]>(["Descripción", "Prima total", "Frecuencia de pago", "Coberturas"])
    const [plans, setPlans] = useState<Plan[]>([]);
    const [typeSubmit, setTypeSubmit] = useState('')
    const [dataProduct, setDataProduct] = useState<any>(null)
    const [messageModal, setMessageModal] = useState<contentModal>({ title: '', description: '',type: '' });
    const [showModal, setShowModal] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);
    const [products, setProducts] = useState<object[]>([])
    const [render, setRender] = useState<boolean>(false);
    const [alert, setAlert] = useState<TypeAlert>({
        alert: Alert.None,
        message: ""
    })
    const handleSubmit = (values: any) => {
        if (typeSubmit === 'create') {
            handleCreateProduct(values);
        } else if (typeSubmit === 'code') {
            handleGetProductByCode(values)
        }
    }

    const handleCreateProduct = async (values: any) => {
        const data = {
            productCode: Number(values.productCode),
            description: values.productDesc,
            exclusions: values.exclusions,
            hasPossibilityBeneficiaries: values.beneficiaries,
            isActive: true,
            createdBy: JSON.parse(user).id
        }
        if ((values.productDesc && values.exclusions && values.productCode) || (dataProduct?.description && dataProduct?.exclusions && values.productCode)){
            const result = await createProduct(token, data);
            if (result.statusCode == 200) {
                setMessageModal({ title: 'Este producto se agregó exitosamente', description: '', type: 'default' })
                setShowModal(true)
            } else if (result.statusCode == 409) {
                setMessageModal({ title: 'Existe un registro con la misma información', description: '', type: 'default' })
                setShowModal(true)
            } else {
                setMessageModal({ title: 'Error al guardar pproducto', description: '', type: 'default' })
                setShowModal(true)
            }
        } else {
            setMessageModal({ title: 'Algunos campos del formulario están incompletos', description: 'Por favor diligencia todos los campos obligatorios para continuar.', type: 'file' })
            setShowModal(true)
        }
    }

    const handleGetProductByCode = async (values: any) => {
        const result = await getProductByCode(token, values.productCode);
        if (result.statusCode === 200) {
            setDataProduct(result.data)
            setPlans(result.data.Modules)
        }
    }
    const onRequestClose = () => {
        setShowModal(false)
    }

    const getAllProducts = async () => {
        setRender(true)
        const response = await getProducts(token, 8, page);
        if (response.statusCode === 200) {
            setProducts(response.data)
        } else {
            setPage(1)
        }
        setRender(false)
    }

    const searchProduct = async (value: any) => {
        const response = await getProductByCode(token, value.value);
        if (response.statusCode === 200) {
            setProducts([response.data])
        } else {
            setAlert({
                alert: Alert.Warn,
                message: response.message
            })
            await getAllProducts()
        }
    }

    const showModalEdit = async (product: any) => {
        const data = {}
    }

    return {
        itemsHead,
        plans,
        handleSubmit,
        setTypeSubmit,
        dataProduct,
        messageModal,
        showModal,
        onRequestClose,
        page,
        setPage,
        products,
        setProducts,
        getAllProducts,
        render,
        searchProduct,
        showModalEdit,
        alert,
        setAlert
    }
}


