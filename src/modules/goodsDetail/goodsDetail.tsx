import * as React from 'react';
interface Props {
    imgSrc: any;
    title : string;
    intro : string;
    bill  : string[];
    money : string;
}

interface State {}

export class GoodsDetailModule extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <img src={this.props.imgSrc} style={{width: '100%'}} />
            <div style={{padding: '20px 10px'}}>
                <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                    {this.props.title}
                </div>
                <div style={{fontSize: '12px', marginTop: '10px' ,color: '#ccc'}}>
                    {this.props.intro}
                </div>
                <div style={{fontSize: '12px', marginTop: '10px', marginLeft: '-10px' }}>
                    {
                        this.props.bill.map((value)=>{
                            return <span style={{padding: '0px 10px', marginLeft: '10px', color: '#ccc', border: '1px solid #ccc'}}>
                                {value}
                            </span>
                        })
                    }
                </div>
                <div style={{color: 'orange', fontSize: '24px',marginTop:'15px'}}>
                    {this.props.money}
                </div>
            </div>
        </div>
        
    }
}