import * as React from 'react';
import { BaseInput } from "./base/input";
import { config } from "./config";

export const UserInput = (props: any) =>{
    return <BaseInput {...config.userInput} {...props}/>
}