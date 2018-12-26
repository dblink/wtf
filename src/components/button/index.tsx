import * as React from 'react';
import { config } from './config';
import { ButtonBase } from './base/button';

interface BaseProps{
    text: string;
    [index: string]: any;
}

type PrimaryButtonProps = BaseProps;

export class PrimaryButton extends React.Component<PrimaryButtonProps, any>{
    render(){
        return <ButtonBase {...config.primaryButton} {...this.props} />
    }
}