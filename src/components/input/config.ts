import { BaseInputProps } from './base/input';

type config = {
    userInput: BaseInputProps
}
export const config:config = {
    userInput: {
        mouseFocus: {
            border: '10px solid #123456'
        },
        style: {
            width: '100px',
        },
        type: 'text'
    }
}