import * as React from 'react';
import { Plate } from '../modules/plate/plate';
import { GoodsHorizontal } from '../modules/goodsList/horizontal';
import { GoodsVertical } from '../modules/goodsList/vertical';
import { data } from '../data';
const src = require('../img/banner.png');

interface Props {
    history: {
        push: any;
    }
}

interface State {}

export class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div style={{padding: '0 20px'}}>
            <img src={src} style={{width: '100%'}}/>
            <div style={{marginTop: '30px'}}>
                <Plate history={this.props.history}/>
            </div>
            <h3 style={{marginTop: '30px'}}>新品特惠</h3>
            <ul>
                {
                    data.womanPage.map((value)=>{
                        //let src = require(value.img);
                        return <li style={{marginTop: '16px', listStyle: 'none'}} onClick={()=>this.props.history.push(`./goodsDetail/womanPage/${value.id}`)}>
                            <GoodsHorizontal imgSrc={value.img}  intro={value.shopName} money={value.money} title={value.title} />
                        </li>
                    })
                }
            </ul>
            <h3 style={{marginTop: '30px'}}>万三推荐</h3>
            <ul style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', flexWrap: 'wrap'}}>
                {
                    data.manPage.map((value)=>{
                        return <li style={{marginTop: '16px', width: '47%', listStyle: 'none'}} 
                            onClick={()=>this.props.history.push(`./goodsDetail/manPage/${value.id}`)} >
                            <GoodsVertical imgSrc={value.img} money={value.money} title={value.title} />
                        </li>
                    })
                }
            </ul>
        </div>
    }
}