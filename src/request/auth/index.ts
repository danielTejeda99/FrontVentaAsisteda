import * as fetch from '@/protocols/fetch'

export const getUserAndToken = async (code: string | null) => {
  const result = await fetch.post('/api/auth/getUserAndTokenByCode',{code: code},undefined);
  return result;
}

export const signin = async () => {
  const result = await fetch.get('/api/auth/signin',undefined);
    return result;
}

export const signout = async () => {
  const result = await fetch.get('/api/auth/signout',undefined);
  return result;
}