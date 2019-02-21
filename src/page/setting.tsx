import * as React from 'react';
import { history } from './router';

interface Props {}

interface State {}

export class Setting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    arr: any[] = [{
        title: '联系客服',
        data: '400 1818 888'
    },{
        title: '检查更新',
        data: 'v1.0'
    }]
    render() {
        return <div>
            {
                this.arr.map((value)=>{
                    return <SettingItem {...value}/>
                })
            }
            {
                localStorage.getItem('isLogin')
                && <div 
                onClick={()=>{
                    alert('注销成功！');
                    history.push('/'); 
                    localStorage.setItem('isLogin', '')}}
                style={{padding: '14px 0', 
                    marginTop:'20px',
                    fontSize: '14px',
                    background: '#fff',
                    textAlign: 'center',color: 'red'}}>
                    退出登录
                </div>
            }
        </div>
    }
}

const SettingItem = (props: any) =>{
    return <div style={{
        height: '16px',
        padding: '20px',
        display: 'flex',
        background: '#fff',
        borderTop: '1px solid #eee',
        justifyContent: 'space-between'
    }}>
        <div style={{color: '#444', fontSize: '14px'}}>
            {props.title}
        </div>
        <div style={{color: '#CCCCCC', fontSize: '14px'}}>
            {props.data}
        </div>
    </div>
}