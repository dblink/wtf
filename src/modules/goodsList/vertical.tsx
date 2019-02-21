import * as React from 'react';

interface Props {
    imgSrc: any;
    title: string;
    money: string;
}

interface State {}

export class GoodsVertical extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div role='button' style={{cursor: 'pointer'}}>
            <img src={this.props.imgSrc} 
                style={{width: '100%'}} />
            <div style={{padding: '11px', height: '85px', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div style={{fontSize: '12px'}}>
                    {this.props.title}
                </div>
                <div style={{fontSize: '16px', color: 'orange',marginTop: '5px'}}>
                    {this.props.money}
                </div>
            </div>  
        </div>
    }
}