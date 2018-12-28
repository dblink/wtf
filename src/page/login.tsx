import * as React from 'react';
import { UserInput, UserInputPassword } from '../components/input';
import { PrimaryButton } from '../components/button';

interface Props {
    linkTo: (page: string)=>void;
    type: 'register' | 'login';
}

interface State {
    data: {
        user: any;
        password: any;
    };
    text: string;
}

export class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: {
                user: '',
                password: ''
            },
            text: this.props.type === 'register' ? '注册' : '登录'
        };
        this.onChange = this.onChange.bind(this);
        this.post = this.post.bind(this);
    }

    onChange(name: 'user' | 'password', value: any){
        let _data = this.state.data;
        _data[name] = value;
        this.setState({
            data: _data
        })
    }
    post(){
        let _data =this.state.data;
        if(!_data.user || !_data.password){
            alert('请输入完整！');
            return;
        }
        if(this.props.type === 'register'){
            alert('注册成功！');
            this.setState({
                data:{
                    user: '',
                    password: ''
                }
            }, ()=>this.props.linkTo('login'));
        }else{
            alert('稍后再试！');
            this.setState({
                data:{
                    user: '',
                    password: ''
                }
            })
        }
    }
    

    render() {
        let text = this.props.type === 'register' ? '注册' : '登录';
        let fText = this.props.type === 'register' ? '登录' : '注册';
        return <section style={{padding: '10px'}}>
            <p style={{textAlign: 'right', padding: '0 10px'}}>
                <a style={{color: '#EFA30C'}} onClick={()=>{
                    this.setState({
                        data: {
                            user:'',
                            password: ''
                        }
                    },()=>this.props.linkTo('welcome'))
                    }}
                >{`返回`}</a>    
            </p>
            <div role='title'>
               <h3 style={{margin: '5px'}}>
                    {text}账户
                </h3>
                <p style={{margin: '5px'}}>
                    快速{text}，一步到位
                </p>
            </div>
            <form style={{textAlign: 'center', height:'calc(100vh - 250px)' ,padding: '40px 10px'}}>
                <div style={{marginTop: '15px'}}>
                    <UserInput placeholder={'输入用户名'} value={this.state.data.user} onChange={(e)=>{
                        this.onChange('user', e.target.value)
                    }} />
                </div>
                <div style={{marginTop: '15px'}}>
                    <UserInputPassword placeholder={'输入密码'} value={this.state.data.password} onChange={(e)=>{
                        this.onChange('password', e.target.value)
                    }} />
                </div>
                <div style={{marginTop: '30px'}}> 
                    <PrimaryButton onClick={this.post}>
                        {text}
                    </PrimaryButton>
                </div>
            </form>
            <p style={{marginBottom: '0', fontSize: '12px', textAlign:'center'}}>
                {`${this.props.type === 'register' ? '已有' : '没有'}账号？`}
                <a onClick={()=>{
                    this.setState({
                        data:{
                            user: '',
                            password: ''
                        }
                    },()=>this.props.linkTo(this.props.type === 'register' ? 'login'  : 'register'))
                    }} style={{color: '#EFA30C'}}>立即{fText}</a>
            </p>
        </section>
    }
}