import * as React from 'react';
import { BaseButtonProps } from '../config';
import { Template } from './template';
interface Props extends BaseButtonProps {
    [index : string]: any;
}

export class BaseButton extends Template<Props, any> {
    constructor(props: Props){
        super(props);
        //let _props = this.props.;
        this.state = {
            showUpdate: false,
            className: this.props.className,
            style: this.props.style
        }
        this.getMouseEvent = this.getMouseEvent.bind(this);
        this.mouseEvent = this.getMouseEvent();
    }
    mouseEvent: React.DOMAttributes<HTMLSpanElement>;
    render(){
        let {
            style: style,
            className: className,
            ...other
        } = this.props;
        return <span role='button' {...this.mouseEvent} className={this.state.className} style={this.state.style} {...other}>
            {this.props.children}
        </span>
    }
}