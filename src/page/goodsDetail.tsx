import * as React from 'react';
import { GoodsDetailModule } from '../modules/goodsDetail/goodsDetail';
import { Button, PrimaryButton } from '../components/button';
import { data } from '../data';
import { cart } from '../components/localData/localData';
interface Props {
    history: {
        push: any;
    },
    match: any;
}

interface State {
    data: any;
}

export class GoodsDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let {type, id} = this.props.match.params;
        let arr = data[type as 'womanPage'];
        let _data = {};
        for(let i=0; i< arr.length; i++){
            if(arr[i].id === id){
                _data = arr[i];  
                break;
            }
        }
        this.state = {
            data: _data
        };
        this.addCart = this.addCart.bind(this);
        this.toCart = this.toCart.bind(this);
    }

    addCart(){
        if(localStorage.getItem('isLogin')){
            let data = cart.addCart(this.state.data)
            if(data.state === 'success'){
                alert('添加成功!')
            }else{
                alert(data.message)
            }
        }else{
            alert('请登录！');
            this.props.history.push('/account/login')
        }
        
    }

    toCart(){
        if(localStorage.getItem('isLogin')){
            this.props.history.push('/cart')
        }else{
            alert('请登录！');
            this.props.history.push('/account/login');
        }
    }

    justDo(){
        if(localStorage.getItem('isLogin')){
            alert('请稍后再试！');
        }else{
            alert('请登录！');
            this.props.history.push('/account/login')
        }
    }

    render() {
        let _data = this.state.data;
        return <div style={{display: 'flex', flexDirection: 'column', height:'100vh', justifyContent: 'space-between'}}>
            <GoodsDetailModule imgSrc={_data.img} title={_data.title} bill={_data.tag} intro={_data.detail} money={_data.money} />
            <div style={{height: '70px', display: 'flex'}} className='icon-wansan'>
                <Button width='20%' onClick={this.toCart}>
                    cart
                </Button>
                <Button width='40%' onClick={this.justDo}>
                    立即购买
                </Button>
                <PrimaryButton width='40%' onClick={this.addCart}>
                    加入购物车
                </PrimaryButton>
            </div>
        </div>
    }
}