import * as React from 'react';
import { BaseInput } from "./base/input";
import { config } from "./config";

interface Props extends React.InputHTMLAttributes<any>{
    onChange ?: any;
}

export const UserInput = (props: Props) =>{
    return <div {...config.account}>
        <span className='icon-wansan' style={{display: 'flex', color: '#1E208F', fontSize: '20px', padding: '14px', borderRight: '1px solid #efefef'}}>
            phone
        </span>
        <BaseInput {...config.user} {...props}/>
    </div>
};

export const PasswordInput = (props: Props) =>{
    return <div {...config.account}>
        <span className='icon-wansan' style={{display: 'flex', color: '#1E208F', fontSize: '20px', padding: '14px', borderRight: '1px solid #efefef'}}>
            password
        </span>
        <BaseInput {...config.password} {...props}/>
    </div>
};

export const NumberInput = (props: Props) => {
    return <BaseInput {...config.number} {...props} />
}

