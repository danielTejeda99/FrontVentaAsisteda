export const request = async (url: string| undefined,method: string,data: object | undefined,token:string | undefined) => {
    const baseUrl = 'http://4.152.250.41';
    const apiUrl = `${baseUrl}${url}`//TODO: variable de entorno
    const header = {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    const promiseRq = await fetch(apiUrl,{
        method: method,       
        headers: token ? {
            ...header,
            "authorization": `Bearer ${token}`
          }: header,
        body: data ? JSON.stringify(data) : undefined
    })
    const response = await promiseRq.json();
    return response
}

export const post = async (url: string,data:object | undefined,token:string | undefined,) => {
    const result = await request(url,'POST',data,token);
    return result;
}

export const get = async (url: string,token:string | undefined) => {
    const result = await request(url,'GET',undefined,token);
    return result;
}

export const patch = async (url: string| undefined,data:object | undefined, token:string | undefined) => {
    const result = await request(url,'PATCH',data,token);
    return result;
}