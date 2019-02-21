import * as React from 'react';

interface Props {}

interface State {}

export class BackSales extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <img src='./img/back.png' style={{width: '100%'}} />
    }
}