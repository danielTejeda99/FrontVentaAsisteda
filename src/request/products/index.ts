import * as fetch from '@/protocols/fetch'

export const createProduct = async (token?:string,data?:any) => {
  const result = await fetch.post(`/api/products`,data, token);
    return result;
}

export const getProductByCode = async (token?:string,id?:any) => {
  const result = await fetch.get(`/api/products/${id}`,token);
    return result;
}