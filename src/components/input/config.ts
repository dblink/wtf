import { BaseInputProps } from './base/input';

type config = {
    userInput: BaseInputProps;
    userInputPassword: BaseInputProps;
}
export const config:config = {
    userInput: {
        mouseFocus: {
            // border: '1px solid #FBDE3C'
        },
        style: {
            height: '36px',
            maxWidth: '320px',
            width: '90%',
            lineHeight: '36px',
            display: 'inline-block',
            borderRadius: '18px',
            color: '#666666',
            backgroundColor: '#f2f2f2',
            margin: 'auto',
            fontSize: '12px',
            border: 'none',
            textIndent: '20px'
        },
        type: 'text'
    },
    userInputPassword: {
        mouseFocus: {
            // border: '1px solid #FBDE3C'
        },
        style: {
            height: '36px',
            maxWidth: '320px',
            width: '90%',
            lineHeight: '36px',
            display: 'inline-block',
            borderRadius: '18px',
            color: '#666666',
            WebkitAppearance: 'none',
            appearance: 'none',
            backgroundColor: '#f2f2f2',
            fontSize: '12px',
            margin: 'auto',
            border: 'none',
            textIndent: '20px'
        },
        type: 'password'
    }
};