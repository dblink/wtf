import { BaseButtonProps } from './base/button';
import './button.css';
export type config = {
    windPrimaryButton ?: BaseButtonProps;
    icon ?: BaseButtonProps;
}
export const config: config = {
    windPrimaryButton: {
        style: {
            height: '36px',
            maxWidth: '320px',
            width: '90%',
            lineHeight: '36px',
            textAlign: "center",
            display: 'inline-block',
            borderRadius: '18px',
            cursor: 'pointer',
            color: '#333333',
            margin: 'auto',
            backgroundColor: '#FBDE3C',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 5px 10px rgba(255, 222, 60, .5)'
        },
        mouseDown: {
            backgroundColor: '#F2CF0B'
        }
    },
    icon: {
        style: {
            verticalAlign: 'middle',
            display: 'inline-block',
            textAlign: 'center',
            background: '#ffde00',
            borderRadius: '50%',
            fontWeight: 'bold'
        }
    }
};