import * as React from 'react';

interface Props {}

interface State {}

export class AfterSales extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <img src='./img/afterSales.png' style={{width: '100%'}} />
    }
}