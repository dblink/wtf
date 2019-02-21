import * as React from 'react';
import { GoodsCarts } from '../modules/goodsCarts/goodsCarts';
import { SelectButton, Button, PrimaryButton } from '../components/button';
import { cart } from '../components/localData/localData';

interface Props {}

interface State {
    isAllSelect: boolean,
    goods: [],
    goodsSumMoney: number,
    goodsSum: number,
    data: any[],
}

export class ShopCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isAllSelect: false,
            goodsSum: 0,
            goodsSumMoney: 0,
            goods: [],
            data: cart.getCart()
        };
        this.watcher = [];
        this.allSelect = this.allSelect.bind(this);
        this.goodsSum = this.goodsSum.bind(this);
        this.getData = this.getData.bind(this);
    }
    watcher: any;
    allSelect(){
        if(this.state.goodsSum === 0){
            let sum = 0;
            let sumMoney = 0;
            this.watcher.map((value:any)=>{
                let _obj = value.run(true);
                console.log(_obj);
                sum += _obj.num;
                sumMoney += _obj.money;
            });
            this.setState({
                goodsSum: sum,
                goodsSumMoney: sumMoney
            })
        }else {
            this.watcher.map((value:any)=>{
                value.run(false);
            });
            this.setState({
                goodsSum: 0,
                goodsSumMoney: 0
            })
        }
    }
    goodsSum(num: number, sumMoney: number){
        //console.log(num);
        this.setState({
            goodsSum: this.state.goodsSum + num,
            goodsSumMoney: this.state.goodsSumMoney + sumMoney
        });
    }
    getData(){
        this.setState({
            data: cart.getCart()
        })
    }
    render() {
        //let _src = require('../img/goods.png')
        return <div>
            {
                this.state.data.map((value: any, key: any)=>{
                    this.watcher[key] = this.watcher[key] || {};
                    return <div style={{display: 'flex',marginTop: '15px'}}>
                        <GoodsCarts id={value.id} goodsSum={this.goodsSum} watcher={this.watcher[key]} 
                        getData={this.getData}
                        imgSrc={value.img} money={value.money} title={value.title} intro={value.detail} />
                    </div>
                })
            }
            <div style={{height: '60px', paddingLeft: '10px', 
                justifyContent: 'space-between',
                position: 'fixed',
                bottom: '0',
                width: '100%',
                display: 'flex', background: '#fff'}}>
                
                <span onClick={this.allSelect} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: this.state.goodsSum !== 0 ? 'orange' : '#333'}}>
                    <SelectButton >
                        {this.state.goodsSum !== 0 ? 'selectFull' : 'selectEmpty'} 
                    </SelectButton>
                    <span style={{marginLeft: '10px'}}>
                        {this.state.goodsSum === 0 ? '全选': `已选(${this.state.goodsSum})`}
                    </span>
                </span>
                <span style={{display: 'flex'}}>
                    <span style={{display: 'flex', color: 'orange', fontSize: '14px', padding: '0 10px', alignItems: 'center'}}>
                        合集：{this.state.goodsSumMoney}
                    </span>
                    <PrimaryButton width='100px' onClick={()=>{alert('请稍后再试！')}}>
                        确认下单
                    </PrimaryButton>
                </span>
            </div>
        </div>
    }
}