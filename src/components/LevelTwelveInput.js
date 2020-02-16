import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelTwelveInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "",
			color: '#ff8585',
			color2: '#ff8585',
			color3: '#c8cec7',
			color4: '#ecb9ec'
		}
		this.props.setHeight('30%');
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value == "move_forward()") {
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div style={{'textAlign':'left','padding':'5px 50px'}}>
				<div className="left-label" style={{'width':'80%'}}>
					<code>move_forward()</code><br />
					<code>move_forward()</code><br />
					<code>move_forward()</code><br />
					<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} style={{'width':'41%','marginLeft': '0px !important'}} className="left-input" ></input>
				</div>
			</div>
		);
	}
}

export default LevelTwelveInput;
