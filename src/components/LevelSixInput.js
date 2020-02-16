import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelFiveInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: ""
		}
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value.toLowerCase() == "10") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div className="left-label" style={{'width':'80%'}}>
				<code>
					number_stairs = number_floors *
				</code>
				<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'20%'}} />
			</div>
		);
	}
}

export default LevelFiveInput;
