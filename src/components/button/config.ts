import { CSSProperties } from 'react';
import './button.css';
export interface ButtonBaseProps {
    style ?: CSSProperties;
    className ?: string;
    mouseHover ?: CSSProperties;
    mouseDown ?: CSSProperties;
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
            backgroundColor: '#4198ff'
        },
        className: 'primaryButton',
        mouseHover: {
            backgroundColor: '#70b2ff'
        },
        mouseDown: {
            backgroundColor: '#237BE3'
        }
    },
};