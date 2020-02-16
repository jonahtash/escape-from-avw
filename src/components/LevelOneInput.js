import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelOneInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "false"
		}
			this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value == "true") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div className="left-label">
				<code>
					door_open =
				</code>
				<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'color':'#ecb9ec'}}/>
			</div>
		);
	}
}

export default LevelOneInput;
