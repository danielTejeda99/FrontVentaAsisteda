import * as fetch from '@/protocols/fetch'

export const configAlly = async (token?:string,idForm?:number,idAlly?:string) => {
  const result = await fetch.get(`/api/config-ally/${idForm}/${idAlly}`,token);
    return result;
}

export const createConfigAlly = async (token?:string,data?:any) => {
  const result = await fetch.post(`/api/config-ally`,data,token);
    return result;
}

export const createAlliesAdvisor = async (token?:string,data?:any) => {
  const result = await fetch.post(`/api/allies-advisor/create`,data,token);
    return result;
}

export const editConfigAlly = async (token?:string,data?:any,id?:number) => {
  const result = await fetch.patch(`/api/config-ally/${id}`,data,token);
    return result;
}

export const getAlliesAdvisor = async (token?:string,id?:number) => {
  const result = await fetch.get(`/api/allies-advisor/${id}`,token);
    return result;
}