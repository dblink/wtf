import * as React from 'react';
import { UserInput, PasswordInput } from '../components/input';
import { AccountButton } from '../components/button';

interface Props {
    history: {
        push: any
    }
    type: string;
}

interface State {
    data: {
        user: string;
        password: string;
    }
}

export class Account extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: {
                user: '',
                password: ''
            }
        };
        //console.log(this.props.type);
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }
    onChange(name: 'user' | 'password', value: string){
        let _data = this.state.data;
        _data[name] = value;
        this.setState({
            data: _data
        })
    }
    login(){
        if(this.state.data.password === '' 
            ||this.state.data.user === ''
        ){
            alert('请填写用户名、密码！');
            return;
        }
        alert('登录成功！');
        localStorage.setItem('isLogin', this.state.data.user);
        this.props.history.push('/')
    }
    render() {
        return <div style={{display: 'flex', height: '100vh',
            background: 'url("./img/bg.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            flexDirection:'column', justifyContent: 'space-between'}}>
            <div style={{textAlign: 'center', display: 'flex', 
                height: '150px',
                flexDirection: 'column',
                justifyContent: 'center'}}>
                <p style={{fontSize: '26px', color: '#fff'}}>万三商城</p>
                <p style={{fontSize: '16px', color: '#fff'}}>wansan shop</p>
            </div>
            <div>
                <div>
                    <UserInput placeholder='请输入用户名' value={this.state.data.user} onChange={(e:any)=>this.onChange('user',e.target.value)}/>
                </div>
                <div style={{marginTop: '30px'}}>
                    <PasswordInput placeholder='请输入密码' value={this.state.data.password} onChange={(e:any)=>this.onChange('password',e.target.value)}/>
                </div>
                <div style={{marginTop: '54px'}}>
                    <AccountButton onClick={this.login}>
                        { this.props.type === 'login' ? '登录' : '注册并登录'}
                    </AccountButton>
                </div>
            </div>
            {
                this.props.type === 'register' 
                    ? <div style={{height: '102px', 
                        background: 'url("./img/bottomBg.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        fontSize: '12px',
                        lineHeight: '102px', textAlign: 'center'}}>
                    已有账号？
                        <span style={{color: 'orange'}} onTouchEnd={()=>this.props.history.push('/account/login')}>点击登录</span>
                    </div>
                    : <div style={{height: '102px', 
                        background: 'url("./img/bottomBg.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        fontSize: '12px',
                        lineHeight: '102px', textAlign: 'center'}}>
                    没有账号？
                    <span style={{color: 'orange'}} onTouchEnd={()=>this.props.history.push('/account/register')}>点击注册</span>
                </div>
            }
            
        </div>
    }
}