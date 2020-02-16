import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelThreeInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "\"Hello There\""
		}
			this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value.toLowerCase() == "\"something completely different\"" || e.target.value.toLowerCase() == "'something completely different'") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div className="left-label" style={{'width':'80%'}}>
				<code>
					password =
				</code>
				<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'65%','fontSize':'25px','padding':'5px'}} />
			</div>
		);
	}
}

export default LevelThreeInput;
