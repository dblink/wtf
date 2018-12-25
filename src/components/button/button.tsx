import * as React from 'react';
import { ButtonBaseProps } from './config';
interface Props extends ButtonBaseProps {
    text: string;
    [index : string]: any;
}

export class ButtonBase extends React.Component<Props, any> {
    constructor(props: Props){
        super(props);
        //let _props = this.props.;
        this.state = {
            style: this.props.style
        }
        this.getMouseEvent = this.getMouseEvent.bind(this);
        this.mouseEvent = this.getMouseEvent();
    }
    mouseEvent: React.DOMAttributes<HTMLSpanElement>;
    //添加鼠标样式
    getMouseEvent(): React.DOMAttributes<HTMLSpanElement>{
        let _mouseEvent:React.DOMAttributes<HTMLSpanElement> = {}
        //是否有鼠标浮动样式
        if(this.props.mouseHover){
            _mouseEvent = {
                onMouseLeave: this.onMouseRestoreHandler.bind(this),
                onMouseEnter: this.onMouseEnterHandler.bind(this)
            }  
        }
        //是否有鼠标点击样式
        if(this.props.mouseDown){
            _mouseEvent.onMouseDown = this.onMouseDownHandler.bind(this);
            _mouseEvent.onMouseUp = this.onMouseRestoreHandler.bind(this);
        }
        return _mouseEvent
        
    }
    onMouseRestoreHandler(e:any){
        this.setState({
            style: this.props.style
        });
    }
    //复原样式
    onMouseEnterHandler(e: any){
        let _style = this.state.style;
        this.setState({
            style: Object.assign({}, _style, this.props.mouseHover)
        })
    }
    onMouseDownHandler(e: any){
        let _style = this.state.style;
        this.setState({
            style: Object.assign({}, _style, this.props.mouseDown)
        });
    }
    render(){
        let {
            text : text,
            style: style,
            className: className,
            ...other
        } = this.props;
        return <span  {...this.mouseEvent} className={className} style={this.state.style} {...other}>
            {text}
        </span>
    }
}