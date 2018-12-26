import './button.css';
import {CSSProperties} from "react";
export interface BaseButtonProps {
    style ?: CSSProperties;
    className ?: string;
    mouseHover ?: CSSProperties | string;
    mouseDown ?: CSSProperties | string;
}
export type config = {
    windPrimaryButton ?: BaseButtonProps;
    icon ?: BaseButtonProps;
}
export const config: config = {
    windPrimaryButton: {
        style: {
            height: '36px',
            width: '320px',
            lineHeight: '36px',
            textAlign: "center",
            display: 'inline-block',
            borderRadius: '18px',
            cursor: 'pointer',
            color: '#333333',
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
            //width: '48px',
            display: 'inline-block',
            //height: '48px',
            //fontSize: '20px',
            //marginRight: '10px',
            //lineHeight: '48px',
            textAlign: 'center',
            background: '#ffde00',
            borderRadius: '50%',
            fontWeight: 'bold'
        }
    }
};