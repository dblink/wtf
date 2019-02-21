import { BaseInputProps } from './base/input';

type config = {
    
    //userInput ?: BaseInputProps;
    //userInputPassword ?: BaseInputProps;
    number ?: BaseInputProps;
    user ?: BaseInputProps;
    password ?: BaseInputProps;
    account ?: BaseInputProps;
}
export const config:config = {
    number: {
        style: {
            width: '30px',
            height: '24px',
            background: '#fff',
            textAlign: 'center',
            border: '1px solid #999',
            color: '#999'
        },
        type:'text'
    },
    user: {
        style:{
            display: 'flex',
            width: '100%',
            fontSize: '14px',
            borderWidth: 0,
            padding: '10px'
        },
        type: 'text'
    },
    password: {
        style:{
            display: 'flex',
            width: '100%',
            fontSize: '14px',
            borderWidth: 0,
            padding: '10px'
        },
        type: 'password'
    },
    account: {
        style:{
            display: 'flex', 
            borderRadius: '5px',
            overflow: 'hidden',
            width: '80%', 
            maxWidth: '330px', 
            margin: 'auto', 
            background: '#Fff'
        },
        type: 'text'
    }
};