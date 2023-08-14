import { useState } from "react";
import { createProduct, getProductByCode } from '@/request/products'
import CookiesUtils from "@/utils/cookieUtils";
interface Plan {
    name: string,
    description: string
    paymentFrequency: string
    descriptionCoverage: string
    FixedInsuredAmount: string
    FixedPremium: string
    AnualPremiumAmount: string
}

const mockPlans = [{
    name: 'Plan 01 - Salud', description: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae. Tincidunt nunc justo convallis scelerisque quam non vulputate. Quam habitasse blandit vestibulum felis tristique. Volutpat libero commodo nisl amet urna etiam consequat sed. Neque sed est sit enim augue morbi enim risus. Pellentesque amet pretium ac in.',
    paymentFrequency: 'Anual', descriptionCoverage: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae.',
    FixedInsuredAmount: '120.000', FixedPremium: '100.000', AnualPremiumAmount: '150.000.000'
},
{
    name: 'Plan 01 - Salud', description: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae. Tincidunt nunc justo convallis scelerisque quam non vulputate. Quam habitasse blandit vestibulum felis tristique. Volutpat libero commodo nisl amet urna etiam consequat sed. Neque sed est sit enim augue morbi enim risus. Pellentesque amet pretium ac in.',
    paymentFrequency: 'Anual', descriptionCoverage: 'Lorem ipsum dolor sit amet consectetur. Orci id pellentesque id vitae et dolor eget eleifend vitae.',
    FixedInsuredAmount: '120.000', FixedPremium: '100.000', AnualPremiumAmount: '150.000.000'
}]
export default function ProductController() {
    const token = CookiesUtils.getCookie('token');
    const user:any = CookiesUtils.getCookie('user');

    const [itemsHead, setItemsHead] = useState<string[]>(["Descripción", "Prima total", "Frecuencia de pago", "Coberturas"])
    const [plans, setPlans] = useState<Plan[]>([]);
    const [typeSubmit, setTypeSubmit] = useState('')
    const [dataProduct, setDataProduct] = useState<any>(null)

    const handleSubmit = (values: any) => {
        if (typeSubmit === 'create') {
            handleCreateProduct(values);
        } else
            if (typeSubmit === 'code') {
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
        const result = await createProduct(token,data);
    }

    const handleGetProductByCode = async (values: any) => {
        const result = await getProductByCode(token, values.productCode);
        if (result.statusCode === 200) {
            setDataProduct(result.data)
            setPlans(result.data.Modules)
        }
    }

    return {
        itemsHead,
        plans,
        handleSubmit,
        setTypeSubmit,
        dataProduct
    }
}
