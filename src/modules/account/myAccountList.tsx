import * as React from 'react';
import { history } from '../../page/router';

interface Props {}

interface State {}

export class MyAccountList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    arr: any[] = [{
        icon: 'after',
        text: '售后服务',
        src : '/afterSales'
    },{
        icon: 'back',
        text: '退货流程',
        src : '/backSales'
    },{
        icon: 'setting',
        text: '设置',
        src : '/setting'
    }]
    render() {
        return <div style={{padding: '15px'}}>
            {
                this.arr.map((value)=>{
                    return <MyAccountListFunc {...value} />
                })
            }
        </div>
    }
}

const MyAccountListFunc = (props: any)=> {
    return <div style={{display: 'flex', 
            height: '26px',
            padding: '15px',
            background: '#FFF',
            borderTop: '1px solid #eee',
            justifyContent: 'space-between'}} 
            onClick={()=>history.push(props.src)}
            >
        <div style={{color: '#ccc'}}>
            <span className='icon-wansan' 
                style={{verticalAlign: 'middle',color: 'inherit', fontSize: '20px'}}>
                {
                    props.icon
                }
            </span>
            <span style={{verticalAlign: 'middle',
                marginLeft: '10px',
                color: '#444', fontSize: '14px'}}>
                {
                    props.text
                }
            </span>
        </div>
        <div style={{color: '#ccc'}}>
            >
        </div>
    </div>
}