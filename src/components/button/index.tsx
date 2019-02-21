import * as React from 'react';
import { config } from './config';
import {BaseButton } from './base/button';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    //width: string
    //iconName: string;
    title: string;
    children: string;
    width ?: string;
}
interface PrimaryButtonProps extends React.HTMLAttributes<HTMLSpanElement>{
    width ?: string;
}
interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement>{
    width ?: string;
    onTouchEnd ?: any;
}

export const PlateIcon = (props: IconProps)=>{
    if(props.width){
        config.plateButton.style.width = props.width;
        config.plateButton.style.height = props.width;
    }
    return <BaseButton {...config.plateButton} {...props}>
        <span {...config.plateIcon}>
            {props.children}
        </span>
        <span>
            {props.title}
        </span>
    </BaseButton>
}
export const PrimaryButton = (props: PrimaryButtonProps)=>{
    let {width, ...other} = props;
    if(width){
        config.primaryButton.style.width = width;
    }

    return <BaseButton {...config.primaryButton} {...other}>
        {props.children}
    </BaseButton>
}
export const Button = (props:ButtonProps) =>{
    let {width, ...other} = props;
    if(width){
        config.button.style.width = width;
    }
    return <BaseButton {...config.button} {...other}>
        {props.children}
    </BaseButton>
}
export const AddOrMinus = (props:ButtonProps) =>{
    return <BaseButton {...config.addOrMinus} {...props}>
        {props.children}
    </BaseButton>
}

export const SelectButton = (props: any) =>{
    return <BaseButton {...config.selectButton} {...props}>
        {props.children}
    </BaseButton>
}

export const AccountButton = (props: any) =>{
    return <BaseButton {...config.accountButton} {...props}>
        {props.children}
    </BaseButton>
}