import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelOneInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "1"
		}
			this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value == "3") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div className="left-label">
				<code>
					number_keys =
				</code>
				<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" />
			</div>
		);
	}
}

export default LevelOneInput;
