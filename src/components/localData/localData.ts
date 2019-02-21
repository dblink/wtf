class LocalData {
    constructor(){
        if(
            !this.getCart()
        ){
            localStorage.setItem('wanSanCart', JSON.stringify([])); 
        }
        
        
    }
    addCart(data: any){
        let cartData: string =  localStorage.getItem('wanSanCart');
        let cartDataArr: any[] = JSON.parse(cartData);
        let _isNotSameObject = this.isNotSame(data.id, cartDataArr);
        if(_isNotSameObject.isNotSame){
            cartDataArr.push(data);
            localStorage.setItem('wanSanCart', JSON.stringify(cartDataArr));
            return {
                state: 'success'
            }
        }
        return {
            state: 'fail',
            message: '已存在购物车'
        }
    }
    deleteCart(data: any){
        let cartData: string =  localStorage.getItem('wanSanCart');
        let cartDataArr: any[] = JSON.parse(cartData);
        let _isNotSameObject = this.isNotSame(data.id, cartDataArr);
        //console.log(_isNotSameObject);
        if(!_isNotSameObject.isNotSame){
            cartDataArr.splice(_isNotSameObject.arrayKey, 1);
            localStorage.setItem('wanSanCart', JSON.stringify(cartDataArr))
            return {
                state: 'success'
            }
        }
        return {
            state: 'fail',
            message: '未找到商品'
        }
         
    }
    getCart(){
        return JSON.parse(localStorage.getItem('wanSanCart')) 
    }
    isNotSame(id: any, cartArray: any){
        for(let i=0; i< cartArray.length; i++){
            if(cartArray[i].id === id){
                return {
                    arrayKey: i,
                    isNotSame:false
                };
            }
        }
        return {
            arrayKey: -1,
            isNotSame: true
        };
    }
}
export const cart = new LocalData();