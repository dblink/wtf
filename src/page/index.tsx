import * as React from 'react';
import { PrimaryButton, Icon } from '../components/button';
import { Login } from './login/login';
let src = require('../img/banner.jpg');
export class Index extends React.Component <any, any>{
    constructor(props: any){
        super(props);
        let {innerWidth, innerHeight} = window;
        this.state = {
            nowPage: 'welcome',
            height: innerHeight,
            width: innerWidth > innerHeight ? innerHeight : innerWidth
        };
        this.linkTo = this.linkTo.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }
    head: React.CSSProperties = {
        borderBottom: '1px solid #999',
        padding: '10px', 
        fontSize:'18px', 
        minHeight: '25px',
        color: '#333',
        fontWeight: 'bold'
    };
    body: React.CSSProperties = {
        //padding: '15px',
        display: 'flex' ,
        height: '100%' ,
        minHeight: '300px',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };
    info = [
        {
            text: '最快30秒申请',
            detail: '提交个人信息，申请借款资格'
        },{
            text: '5分钟沟通',
            detail: '了解借款情况，获取最终额度'
        },{
            text: '提交审批',
            detail: '极速放款，最快2小时放款'
        }
    ];
    linkTo(page:string){
        this.setState({
            nowPage: page
        })
    }
    renderContent(){
        switch(this.state.nowPage){
            case 'welcome': {
                return (
                [   
                    <div style={{display: 'block'}}>
                        <img src={src} style={{width: '100%'}} />
                    </div>,
                    <div style={this.head}>
                        申请流程
                    </div>
                    ,
                    <div style={this.body}>
                        <ul className='intro-ul'>
                            {
                                this.info.map((value: any, key: any)=>{
                                    return <li key={key} style={{marginTop: key !== 0 ? '20px' : '0', flexDirection: 'row'}}>
                                        <Icon width='36px'>
                                            {key+1}
                                        </Icon>
                                        <div style={{marginLeft: '10px', verticalAlign: 'middle',display: 'inline-block'}}>
                                            <p style={{fontSize: '14px',fontWeight: 'bold'}}>
                                                {value.text}
                                            </p>
                                            <p style={{fontSize: '12px',color: '#666'}}>
                                                {value.detail}
                                            </p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                        <div style={{padding: '20px 0',textAlign:'center'}}>
                            <PrimaryButton onClick={()=>{this.linkTo('login')}}>
                                立即申请贷款
                            </PrimaryButton>
                        </div>
                        <div style={{textAlign: 'center', justifyContent: 'center' ,fontSize:'12px', color: '#666', height: '15%'}}> 
                            <p>全流程跟进，彻底解决您的资金需求！</p>
                            <p>严格保密，绝不泄露客户隐私信息！</p>
                            <p>
                                版权所有：广州逐风商业保理有限公司
                            </p>
                        </div>
                    </div>
                ]
            )}
            case 'login':{
                return <Login type='login' linkTo={this.linkTo} />
            }
            case 'register': {
                return <Login type='register' linkTo={this.linkTo} />
            }
        }
    }
    render(){
        return <section style={{
                height:'100vh', 
                width: this.state.width,
                maxWidth: this.state.width,
                margin: 'auto',
                overflow: 'auto',
                color: '#333'}} className='section'>
            {
                this.renderContent()
            }
        </section>
        
    }
}