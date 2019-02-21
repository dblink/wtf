import * as React from 'react';
import { data } from '../data';
import { GoodsHorizontal } from '../modules/goodsList/horizontal';

interface Props {
    match: any;
    history: {
        push: any;
    }
}

interface State {}

export class GoodsList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        let {type} = this.props.match.params;
        return <ul>
        {
            data[type as 'womanPage'].map((value)=>{
                return <li style={{marginTop: '16px', listStyle: 'none'}} onClick={()=>this.props.history.push(`/goodsDetail/${type}/${value.id}`)}>
                    <GoodsHorizontal imgSrc={value.img} intro={value.shopName} money={value.money} title={value.title} />
                </li>
            })
        }
    </ul>
    }
}