import * as React from 'react';
import { AddOrMinus, SelectButton } from '../../components/button';
import { NumberInput } from '../../components/input';
import { cart } from '../../components/localData/localData';

interface Props {
    imgSrc: any;
    title: string;
    intro: string;
    money: string;
    watcher: any;
    goodsSum: any;
    id: any;
    getData: any;
}

interface State {
    isSelected: boolean;
    number: number;
}

export class GoodsCarts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isSelected: false,
            number: 1
        };
        this.select = this.select.bind(this);
        this.minus = this.minus.bind(this);
        this.add = this.add.bind(this);
        this.touchOver = this.touchOver.bind(this);
        this.props.watcher.run = (state: boolean)=>{
            this.setState({
                isSelected: state
            });
            let money: any = this.props.money;
            money = parseFloat(money.replace(/\D*/g, ''));
            //console.log(money);
            return { num: this.state.number, money: this.state.number * money}
        }
        this.touchDelete = this.touchDelete.bind(this);
    }
    select(state: boolean){
        this.setState({
            isSelected: state
        },()=>{
            if(this.state.isSelected){
                let money: any = this.props.money;
                money = parseFloat(money.replace(/\D*/g, ''));
                this.props.goodsSum(this.state.number, this.state.number * money )
            }else{
                let money: any = this.props.money;
                money = parseFloat(money.replace(/\D*/g, ''));
                this.props.goodsSum(-this.state.number, -this.state.number * money);
            }
            
        });
    }
    minus(e: React.TouchEvent<HTMLSpanElement>){
        //e.stopPropagation();
        if(this.state.number > 1){
            if(this.state.isSelected){
                let money: any = this.props.money;
                money = parseFloat(money.replace(/\D*/g, ''));
                this.props.goodsSum(-1, -1 * money)
            }
            this.setState({
                number: this.state.number - 1
            })
        }
    }
    add(e: React.TouchEvent<HTMLSpanElement>){
        if(this.state.isSelected){
            let money: any = this.props.money;
                money = parseFloat(money.replace(/\D*/g, ''));
            this.props.goodsSum(1, 1* money)
        }
        this.setState({
            number: this.state.number + 1
        })
    }
    setTime: any;
    touchMove(){
        //this.setTime = 0;
    }
    touchOver(){
        clearTimeout(this.setTime);
        this.select(!this.state.isSelected)
    }
    touchDelete(e: React.TouchEvent<HTMLSpanElement>){
        e.stopPropagation();
        let _conf = confirm('是否确认删除？');
        if(_conf){
            let _data = cart.deleteCart({id: this.props.id});
            if(_data.message){
                alert(_data.message)
            }else {
                alert('删除成功！');
                this.props.getData();
            }
            
        }
    }
    render() {
        return <div onTouchMove={this.touchMove} onTouchEnd={this.touchOver} style={{flexDirection: 'row', display: 'flex',padding:'10px', width: '100%', background: '#fff'}}>
            <span style={{display: 'flex', color: this.state.isSelected ? 'orange' : '#333'}}>
                <SelectButton >
                    {!this.state.isSelected ? 'selectEmpty' : 'selectFull'}
                </SelectButton>
            </span>
            <img src={this.props.imgSrc} style={{height: '72px'}}/>
            <div style={{
                width: '100%',
                padding: '0 10px',
                display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <p style={{fontSize: '12px', fontWeight: 'bolder'}}>
                        {this.props.title}
                    </p>
                    <p style={{fontSize: '12px', color: '#ccc'}}>
                        {this.props.intro}
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'}}>
                    <p style={{fontSize: '14px'}}>
                        {this.props.money}
                    </p>
                    <span style={{color: 'red', fontSize: '12px'}} onTouchEnd={this.touchDelete}>
                        删除
                    </span>
                    <div style={{display: 'inline-flex'}} onTouchEnd={(e)=>e.stopPropagation()}>
                        <AddOrMinus onTouchEnd={this.minus}>
                            -
                        </AddOrMinus>
                        <NumberInput disabled={true} value={this.state.number} />
                        <AddOrMinus onTouchEnd={this.add}>
                            +
                        </AddOrMinus>
                    </div>
                </div>
                
            </div>
        </div>
    }
}