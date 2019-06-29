import React,{Component} from "react";
import ATMDisplay from "./ATMDisplay";
import DispenseDetailDisplay from "./DispenseDetailDisplay";
import ATMCSS from "./ATM.css";

class ATMDispenser extends Component {
	constructor(props){
		super(props);
		this.state = {
			amountToDispense:0
		};
		this.getMoney = this.getMoney.bind(this);
	}

	getMoney(e,amountToDispense){
		this.setState({
			amountToDispense
		});
	}


	render(){
		const {amountToDispense} = this.state;
		return <div className="container">
			<h1 className="header"> ATM Money Dispenser</h1>	
			<div className="container flex">
				<ATMDisplay getMoney={this.getMoney} />
				<DispenseDetailDisplay amountToDispense={amountToDispense} />
			</div>
		</div>	
	}

}

export default ATMDispenser;