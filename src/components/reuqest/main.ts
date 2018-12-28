import {Callback, interfaceSetting, Key, Parameter, RequestParameter} from "./setting";

const formatParams = function (jsonParams: any): string {
    let array: Array<any> = [];
    Object
        .keys(jsonParams)
        .map(function (e) {
            array.push(e + "=" + jsonParams[e]);
        });
    return array.join("&");
};

export interface OptionType<T extends Key> {
    type ?: string;
    dataType ?: string;
    data ?: Parameter<T>;
    url ?: string;
    succeed ?: (data: any, xml?: any) => void;
    fail ?: (errorText ?:any, xml ?: any) => void;
    error ?: Parameter<T>;
    [index: string] : any;
}

export interface ErrorCallback {
    Status: 'FAILURE' | 'SUCCESS';
    ErrMsg: string;
    Value : any;
}

export type CommonOptionType = OptionType<Key>;

class AjaxRequest {
    options: OptionType<Key>;
    private xhr: XMLHttpRequest = new XMLHttpRequest();
    sendMessage() {
        if (!this.options.data) {
            console.error("nodata");
            return;
        }
        if(this.options.addr){
            this.options.url = [this.options.addr, this.options.url].join('');
        }
        let _baseUrl = 1 ? 'http://lotusapi.hehuadata.com' : '';
        let _url = [_baseUrl, this.options.url].join('');
        //console.log(this.options.url);
        let params: any = formatParams(this.options.data);
        if (this.options.type === "GET") {
            this
                .xhr
                .open("GET",   _url + "?" + params, true);
            this
                .xhr.setRequestHeader("Control-Allow-Origin", this.options.addr || "*");
            this
                .xhr
                .send(null);
        } else if (this.options.type.toString() === "POST") {
            this
                .xhr
                .open("POST", _url, true);
            if(this.options.contentType !== "application/x-www-form-urlencoded"){
                params = this.options.data;
            }else{
                this
                    .xhr
                    .setRequestHeader("Content-Type", this.options.contentType);
            }

            this
                .xhr
                .send(params);
        }
        this.xhr.onreadystatechange = this.callBack.bind(this);
    };
    closeXHR(){
        this.xhr.abort();
    }
    callBack() {
        let xhr = this.xhr;
        if (xhr.readyState === 4) {
            let status = xhr.status;
            let data:any;
            if (status >= 200 && status < 300) {
                try{
                    data = JSON.parse(xhr.response);
                }catch(e){
                    data = xhr.response;
                }
                this.options.succeed(data, xhr.responseXML);
            } else {
                let errorObject:ErrorCallback = {
                    ErrMsg: xhr.responseText,
                    Status: "FAILURE",
                    Value: ""
                };
                this.options.fail(errorObject, xhr.responseXML)
            }
        }
    };
}

class Ajax extends AjaxRequest {
    options: OptionType<Key>;
    type: Key;
    date: Date = new Date();
    startTime: number;
    closeArray: any[] = [];
    constructor(type ?: Key, option ?: OptionType<Key>){
        super();
        /*this.type = type;
        this.options = option;
        this.options.fail = this.failure(option.fail);
        this.options.succeed = this.succeed(option.succeed);*/
    }
    set option(options:any){
        //let baseUrl = 'http://lotusapi.hehuadata.com';
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        options.contentType = options.contentType || "application/x-www-form-urlencoded";
        //options.url = options.url;
        this.options = options; //设置
        //this.startTime = this.date.getTime();
        this.sendMessage();
    }

    /**
     * 用于获取options.data数据
     * @param data options.data
     */
    getData(data:any){
        let isFormData = typeof data.get === "function";
        return(name: string) =>{
            if(isFormData){
               return data.get(name);
            }else {
                return data[name];
            }
        }
    }
    setData(data:any){
        let isFormData = typeof data.get === "function";
        return (name: string, value: string)=>{
            if(isFormData){
                data.set(name, value);
            }else{
                data[name] = value;
            }
        }
    }
    _main() {
        let type: Key,
            options,
            _options: OptionType<Key>,
            names;
        type = this.type;
        options = this.options;
        //合并
        _options = Object.assign(interfaceSetting[type], options);

        //错误信息
        names = _options.error ? Object.keys(_options.error) as RequestParameter[Key][] : [];
        let _getDataFunc = this.getData(_options.data);

        for(let i = 0; i< names.length; i++){
            let _name = names[i];
            if(!_getDataFunc(_name)){
                let _error: ErrorCallback =   {
                    Status: "FAILURE",
                    ErrMsg: _options.error[_name] ,//错误信息
                    Value : ""
                };
                options.fail(_error);
                return;
            }
        }
        //console.log(_options, this.type);
        this.option = _options;
    }
    main(){
        let type = this.type;
        //console.log(this);
        /*if(type !== 'login'){
            let _setDataFunc = this.setData(this.options.data);
            _setDataFunc('Token', localData.getData('Token'));
        }*/
        this._main();
    }
    then(func: any){
        func(this);
    }
    private closeFunc(json: {name: string, value: any}){
        if(!json.value){
            return ;
        }
        if(typeof json.value === "number"){
            clearTimeout(json.value);
        }else {
            json.value.closeXHR();
            //this.closeXHR();
        }
    }
    close(){
        this.closeArray.map(this.closeFunc);
        this.closeXHR();
    }
    failure(func: any){
        return (data: Callback) => {
            //console.log(data);
            let time = 2;
            let duration =  time * 1000 - (new Date().getTime() - this.startTime);
            let _arr = setTimeout(()=>{
                if(data.ErrMsg === '令牌失效！'){
                    alert('登录失效！');
                    //localData.clear();
                    //history.push('/');
                    return false;
                }
                func(data);
            }, duration < 0 ? 0 : duration);
            this.closeArray.push({name: 'failTime' , value: _arr});
        }
    }
    timer:any ='';
    succeed(func: any){
        //this.timer = '';
        return (data: Callback) => {
            if(data.Status === 'FAILURE'){
                this.options.fail(data);
                return;
            }
            //console.log(data);
            let time = 1;
            let duration =  time * 1000 - new Date().getTime() + this.startTime;
            //console.log(new Date().getTime() , this.startTime);
            let _arr = setTimeout(()=>{
                //console.log(this);
                func(data);
            }, duration < 0 ? 0 : duration);
            this.closeArray.push({name: 'startTime' , value: _arr});
        }
    }
}

export function main() {
    //console.log(options);
    let _request = new Ajax();
    return function (type: Key, options: CommonOptionType) {
        //console.log(this);
        _request.type = type;
        _request.options = options;
        _request.options.fail = _request.failure(options.fail);
        _request.options.succeed = _request.succeed(options.succeed);
        _request.startTime = new Date().getTime();
        _request.main();
        return _request;
    }
    //new Ajax(type, options).main();
    //return _req;
}