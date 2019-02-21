import * as React from 'react';

interface Props {
    imgSrc: any;
    title: string;
    intro: string;
    money: string;
}

interface State {}

export class GoodsHorizontal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div style={{display: 'flex', flexDirection:'row', background: '#fff'}}>
            <img src={this.props.imgSrc} style={{display: 'flex', height: '120px', width: '110px'}}/>
            <div style={{display: 'flex', padding: '17px 24px 17px 0', flexDirection: 'column',justifyContent: 'space-between',paddingLeft: '10px'}}>
                <div style={{wordBreak:'break-word'}}>
                    <p style={{fontSize: '14px', fontWeight: 'lighter'}}>
                        {this.props.title}
                    </p>
                    <p style={{fontSize: '12px', color: '#ccc', marginTop:'5px'}}>
                        {this.props.intro}
                    </p>
                </div>
                <p style={{fontSize: '16px', color: 'orange'}}>
                    {this.props.money}
                </p>
            </div>
        </div>
    }
}