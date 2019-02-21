import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Index } from '.';
import { createBrowserHistory } from 'history';
import { GoodsDetail } from './goodsDetail';
import { ShopCart } from './shopCart';
import { GoodsList } from './goodsList';
import { Account } from './account';
import { MyAccount } from './myAccount';
import { Setting } from './setting';
import { AfterSales } from './afterSales';
import { BackSales } from './backSales';

interface Props {}

interface State {}
export const history = createBrowserHistory();
export class PageRouter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Router history={history}  >
        <Switch>
            <Route exact path={'/'} component={Index} />
            <Route path='/goodsDetail/:type/:id' component={GoodsDetail} />
            <Route path='/goodsList/:type' component={GoodsList} />
            <Route path='/account/register' component={()=><Account history={history} type='register'/>} />
            <Route path='/account/login' component={()=><Account history={history} type='login'/>} />
            <Route path='/myAccount' component={MyAccount} />
            <Route path='/setting' component={Setting} />
            <Route path='/afterSales' component={AfterSales} />
            <Route path='/backSales' component={BackSales} />
            <Route path='/cart' component={ShopCart} />
            <Route path={'/**'} exact component={()=><div>404</div>} />
        </Switch>
    </Router>
    }
}