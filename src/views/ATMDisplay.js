import React,{PureComponent} from "react";


class ATMDisplay extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			amount:""
		};
		this.onChangeAmount = this.onChangeAmount.bind(this)
		this.getMoney = this.getMoney.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	onChangeAmount(e){
		let amount = e.target.value;
		if(/^[0-9]*$/.test(amount)){
			this.setState({
				amount
			});
		} else {
			alert("only whole numbers are allowed")
		}
		
	}

	getMoney(e){
		this.props.getMoney(e,this.state.amount);
	}
	handleKeyDown(e) {
	    if (e.key === 'Enter') {
	      this.getMoney(e);
	    }
  	}


	render(){
		const {amount} = this.state;
		return <div className="flex-1 center display-container">
			<div className="flex column">
				<h2 className="text-center">Welcome to ATM</h2>
				<h6>Enter the Amount</h6>
				<input value={amount} type="number" onChange={this.onChangeAmount} placeholder="0" onKeyDown={this.handleKeyDown} />
				<button onClick={this.getMoney} className="top-space">Get Money</button>	
			</div>
		</div>	
	}

}

export default ATMDisplay;