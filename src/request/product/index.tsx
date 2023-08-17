import * as fetch from "@/protocols/fetch";


export const getProducts = async (token: string | undefined, limit?: number, offset?: number) => {
    const result = await fetch.get(`/api/products?limit=${limit}&offset=${offset}`, token);
    return result;
}

export const getProductByCode = async (token: string | undefined, code?: number) => {
    const result = await fetch.get(`/api/products/${code}`, token);
    return result;
}


export const getProductByName = async (token: string | undefined, limit?: number, name?: string) => {
    const result = await fetch.get(`/api/products?limit=${limit}&name=${name}`, token);
    return result;
}