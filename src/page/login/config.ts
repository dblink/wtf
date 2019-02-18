type config ={
    reqSetting: ReqSetting;
}
type ReqSetting = {
    login: string;
    register: string;
}

export const config: config = {
    reqSetting: {
        login: '',
        register: ''
    }
}