import * as React from 'react';
import { PrimaryButton, Icon } from '../components/button';
//import * as Table from '../components/table';
//let Table = require('../components/table');
//import { Table } from '../components/table';
//import { lazyLoad } from '../components/loadable/loadable';


export class Login extends React.Component{
    constructor(props: any){
        super(props)
    }
    head: React.CSSProperties = {
        borderBottom: '1px solid #999',
        padding: '10px', 
        fontSize:'18px', 
        color: '#333',
        fontWeight: 'bold'
    };
    body: React.CSSProperties = {
        padding: '15px',
    };
    info = [{
        text: '最快30秒申请',
        detail: '提交个人信息，申请借款资格'
    },{
        text: '5分钟沟通',
        detail: '了解借款情况，获取最终额度'
    },{
        text: '提交审批',
        detail: '极速放款，最快2小时放款'
    }]
    render(){
        //let a = new Table.Some();
        //let B = Table.A();
        return <section style={{height: '100vh', color: '#333'}}>
            <div style={{height: '150px'}}>
                
            </div>
            <div style={this.head}>
                申请流程
            </div>
            <div style={this.body}>
                <ul className='intro-ul'>
                    {
                        this.info.map((value: any, key: any)=>{
                            return <li key={key} style={{marginTop: key !== 0 ? '20px' : '0'}}>
                                <Icon width='36px'>
                                    {key+1}
                                </Icon>
                                <div style={{marginLeft: '10px', verticalAlign: 'middle',display: 'inline-block'}}>
                                    <p style={{fontSize: '18px',fontWeight: 'bold'}}>
                                        {value.text}
                                    </p>
                                    <p style={{fontSize: '14px',color: '#666'}}>
                                        {value.detail}
                                    </p>
                                </div>
                            </li>
                        })
                    }
                    
                </ul>
                <div style={{padding: '20px 0',textAlign:'center'}}>
                    <PrimaryButton >
                        立即申请贷款
                    </PrimaryButton>
                </div>
                <div style={{textAlign: 'center', fontSize:'12px', color: '#666'}}> 
                    <p>全流程跟进，彻底解决您的资金需求！</p>
                    <p>严格保密，绝不泄露客户隐私信息！</p>
                    <p>
                        版权所有：广州逐风商业保理有限公司
                    </p>
                </div>
            </div>
        </section>
    }
}

/*
export const Login = ()=>{
    let B = Table.A();
    return <div>
        <B />
    </div>
}
*/