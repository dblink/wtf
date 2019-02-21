import * as React from 'react';
import { config } from './config';
import { PlateIcon } from '../../components/button';

interface Props {
    history: {
        push: any;
    }
}

interface State {}

//主页Plate
export class Plate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    list: {
        name: string;
        title:string;
        type: string;
    }[] = [{
        name: 'man',
        title: '男装',
        type: 'manPage',
    },{
        name: 'woman',
        title: '女装',
        type: 'womanPage'
    },{
        name: 'child',
        title: '童装',
        type: 'childPage'
    },{
        name: 'inner',
        title: '内衣',
        type: 'innerPage'
    },{
        name : 'manShoes',
        title: '男鞋',
        type: 'manShoesPage'
    },{
        name: 'womanShoes',
        title: '女鞋',
        type: 'womanShoesPage'
    },{
        name: 'sports',
        title: '运动',
        type: 'sportsPage'
    },{
        name: 'bag',
        title: '箱包',
        type: 'bagPage'
    }]
    render() {
        let width = (config.WIDTH - 40)/4;
        return <div style={{display: 'flex', background: '#Fff', flexWrap: 'wrap'}}>
            {
                this.list.map((value, key)=>{
                    return <PlateIcon onClick={()=>{
                        this.props.history.push(`./goodsList/${value.type}`)
                    }} width={width+'px'} title={value.title} key={key} >
                        {value.name}
                    </PlateIcon>
                })
            }
        </div>
    }
}