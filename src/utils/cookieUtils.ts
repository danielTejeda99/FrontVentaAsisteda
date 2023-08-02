import Cookies from 'js-cookie';


export default class CookiesUtils {
    static setCookie(name: string, value: any, object?: object) {
        Cookies.set(name, value, object);
    }
    static getAllCookie() {
        return Cookies.get();
    }
    static getCookie(name: string) {
        return Cookies.get(name);
    }
    static removeCookie(name: string) {
        Cookies.remove(name);
    }
}