import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Index} from ".";
import '../css/common.css';
class TestForm extends React.Component {
    data:any = {
        "PlatformMoneymoremore": "s2",
        "OrderNo": "00001",
        "Amount": "100.01",
        "RechargeType": "3",
        "ReturnURL": "http%3a%2f%2fwww.baidu.com",
        "NotifyURL": "http%3a%2f%2fwww.baidu.com",
        "SignInfo": "clJNbCTWzxi4PjawlhsGDB7o5W6F0vnUQD5vWU1VY/T5vutdHr52poGZ59r4jBFQ8hAqfiuU9XbF0cFe" +
                "YozO/vwqX/euKgqQwyGaAnlvmEGHtyKVLCWJRP4m8hrPEA6w8A8uekH91Fm6QJcF/vzGhFTseWg0ylw2" +
                "U2z8p4sZZtY="
    }
    render() {
        return <form method='post' action='http://hqbtest.95epay.com:4080/smallloan/sloan/recharge.action'>
            {
                Object.keys(this.data).map((value: any, key: any)=>{
                    return <input type='text' name={value} key={key} value={this.data[value]}  />
                })
            }
            <input type='submit'></input>
        </form>
    }
}
ReactDOM.render(
    <Index />, document.getElementById("example"));