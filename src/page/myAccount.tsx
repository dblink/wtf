import * as React from 'react';
import { MyAccountList } from '../modules/account/myAccountList';
interface Props {
    history: any;
}

interface State {}

export class MyAccount extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <div style={{height: '100px',padding: '20px',
                background: '#fff',
                lineHeight: '100px',
                justifyContent: 'center',
            }}>
                <span style={{fontSize: '18px'}}>
                    用户名：
                {
                    localStorage.getItem('isLogin') 
                    || <span 
                            style={{color: 'orange', fontSize: '18px'}}
                            onClick={()=>{this.props.history.push('/account/login')}}>
                        点击登录</span>
                }
                </span>
            </div>
            <MyAccountList />
        </div>
    }
}