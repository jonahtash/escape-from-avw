import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelFiveInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: ""
		}
		this.props.setHeight('10%');
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value.toLowerCase() == "8") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div className="left-label" style={{'width':'80%'}}>
				<code>
					next_room = room_number +
				</code>
				<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'20%'}} />
			</div>
		);
	}
}

export default LevelFiveInput;
