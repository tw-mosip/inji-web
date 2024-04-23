export class storage {

    static ISSUERS_LIST = "issuers_list";
    static SELECTED_ISSUER = "selected_issuer";
    static CREDENTIALS_SUPPORTED = "credentials_supported";
    static SESSION_INFO = "download_session"
    static setItem = (key: string, value: string) => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    static getItem = (key: string) => {
        let data = localStorage.getItem(key);
        if (data) {
            data = JSON.parse(data);
        }
        return data;
    }
    static removeItem = (key: string) => {
        return localStorage.removeItem(key);
    }
}
