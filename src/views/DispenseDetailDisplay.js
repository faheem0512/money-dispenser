import React from "react";


class DispenseDetailDisplay extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			denominations:{
				1:0,
				2:0,
				5:0,
				10:0,
				20:0,
				50:0,
				100:0,
				200:0,
				500:0,
				2000:0
			},
			totalDispensedNotes:0
		};
	}
	
	despenseAmount(amount){
		amount = parseInt(amount);
		let totalDispensedNotes = 0;
		const denominationsAvailable = Object.keys(this.state.denominations).sort(function(a, b){return b-a});
		for (var i = 0; i < denominationsAvailable.length; i++) {
			if(amount >= denominationsAvailable[i]){
				let occ = Math.floor(amount / denominationsAvailable[i]);
				amount = amount % denominationsAvailable[i];
				this.state.denominations[denominationsAvailable[i]] = occ; /* No re rendering due to this*/
				totalDispensedNotes+= occ;
			} else {
				this.state.denominations[denominationsAvailable[i]] = 0;
			}
			
		}
		/* this set state will call render and other denominations will also be diplayed */
		this.setState({totalDispensedNotes});

	}

	componentWillReceiveProps(nextProps){
		if(nextProps.amountToDispense !== this.props.amountToDispense){
			this.despenseAmount(nextProps.amountToDispense)
		}
	}


	render(){
		const {denominations,totalDispensedNotes} = this.state;
		const denoKeys = Object.keys(denominations);
		var denoElm = [];
		for(var i=0;i< denoKeys.length;i+=2){
			var _evenElm = i+1 < denoKeys.length;
			denoElm.push(<div className="flex flex-1 display-row" key={`${i}__decs`}>
				<div className="flex-1">{denominations[denoKeys[i]]} notes of Rs {denoKeys[i]}</div>
				{_evenElm && <div className="flex-1">{denominations[denoKeys[i+1]]} notes of Rs {denoKeys[i+1]}</div>}
			</div>)
		}
		return <div className="flex-1 column dispense-detail-container">
			<h4>You will get following amount</h4>
			<div className="separator" />
			<div className="flex column">
				{denoElm}
			</div>
			<h4>Total notes dispensed: {totalDispensedNotes}</h4>
		</div>	
	}

}

export default DispenseDetailDisplay;