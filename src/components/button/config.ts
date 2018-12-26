import { CSSProperties } from 'react';
import './button.css';
export interface ButtonBaseProps {
    style ?: CSSProperties;
    className ?: string;
    mouseHover ?: CSSProperties | string;
    mouseDown ?: CSSProperties | string;
}
export type config = {
    primaryButton ?: ButtonBaseProps
}
export const config: config = {
    primaryButton: {
        style: {
            padding: '10px',
            display: 'inline-block',
            borderRadius: '2px',
            cursor: 'pointer',
            color: '#FFF',
        },
        className: 'primaryButton',
        mouseHover: 'hoverPrimary',
        mouseDown: {
            backgroundColor: '#237BE3'
        }
    },
};