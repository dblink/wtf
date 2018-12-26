import * as React from 'react';
export class Template <P, S> extends React.Component<P | any , S | any> {
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
            _mouseEvent.onMouseUp = this.onMouseUpHandler.bind(this);
        }
        return _mouseEvent
        
    }
    onMouseRestoreHandler(e:any){
        this.setState({
            shouldUpdate: true,
            style: this.props.style,
            className: this.props.className
        });
    }
    onMouseEnterHandler(e: any){
        if(typeof this.props.mouseHover === 'string'){
            this.setState({
                shouldUpdate: true,
                style: this.props.style,
                className: `${this.props.className} ${this.props.mouseHover}`
            })
        }else{
            let _style = this.state.style;
            //初始化 className 并且改变 style
            this.setState({
                shouldUpdate: true,
                style: Object.assign({}, _style, this.props.mouseHover),
                className: this.props.className
            })
        }
        
    }
    updateClassName(className: string){
        this.setState({
            shouldUpdate: true,
            className: '',
            style: this.props.style
        })
    }
    onMouseDownHandler(e: any){
        if(typeof this.props.mouseDown === 'string'){
            this.setState({
                shouldUpdate: true,
                
                className: `${this.state.className} ${this.props.mouseDown}`
            })
        }else{
            let _style = this.state.style;
            this.setState({
                shouldUpdate: true,
                style: Object.assign({}, _style, this.props.mouseDown)
            });
        }
    }
    onMouseUpHandler(e: any){
        if(this.props.mouseHover){
            this.onMouseEnterHandler(e);
        }else{
            this.onMouseRestoreHandler(e);
        }
    }
    //允许改变的样式为true才可以改变
    shouldComponentUpdate(nextProps: any, nextState: any){
        return nextState.shouldUpdate 
    }
    componentDidUpdate(){
        this.setState({
            shouldUpdate: false
        })
    }
}