import { BaseButtonProps } from './base/button';
import './button.css';
export type config = {
    plateIcon ?: BaseButtonProps;
    plateButton ?: BaseButtonProps;
    primaryButton ?: BaseButtonProps;
    button ?: BaseButtonProps;
    addOrMinus ?: BaseButtonProps;
    selectButton ?: BaseButtonProps;
    accountButton ?: BaseButtonProps;
}
export const config: config = {
    plateIcon: {
        //className: 'icon-wansan',
        style: {
            width: '36px',
            fontSize: '36px',
            textAlign: 'center'
        }
    },
    plateButton: {
        className: 'icon-wansan',
        style: {
            display: 'flex', 
            height: '87px',
            width: '87px',
            alignItems: 'center',
            flexDirection: 'column', 
            justifyContent: 'center' 
        }
    },
    primaryButton: {
        style: {
            background: 'orange',
            color: '#fff',
            display:'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            //border: '1px solid #ddd'
        }
    },
    button: {
        style: {
            background: '#fff',
            color: '#666666',
            border: '1px solid #ddd',
            display:'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    addOrMinus:{
        style: {
            display:'inline-block',
            background: '#fff',
            border: '1px solid #999',
            color: '#666',
            width: '30px',
            height: '24px',
            textAlign: 'center'
        }
    },
    selectButton: {
        className: 'icon-wansan',
        style:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'inherit'
        }
    },
    accountButton: {
        style: {
            width: '80%',
            maxWidth: '330px',
            display: 'block',
            lineHeight: '48px',
            height: '48px',
            textAlign: 'center',
            margin: 'auto',
            background: '#3C3DA4',
            color: '#Fff'
        }
    }
};