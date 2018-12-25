import * as React from 'react';
import { PrimaryButton } from '../components/button';
//import * as Table from '../components/table';
//let Table = require('../components/table');
//import { Table } from '../components/table';
//import { lazyLoad } from '../components/loadable/loadable';


export class Login extends React.Component{
    constructor(props: any){
        super(props)
    }
    render(){
        //let a = new Table.Some();
        //let B = Table.A();
        return <div>
            {<PrimaryButton text={'点击'} onClick={()=>console.log(1)} />}
            {<PrimaryButton text={'点击2'} onClick={()=>console.log(2)} />}
        </div>
    }
}

/*
export const Login = ()=>{
    let B = Table.A();
    return <div>
        <B />
    </div>
}
*/