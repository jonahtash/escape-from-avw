import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelEightInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "1",
			color: '#ff8585',
			color2: '#ff8585'
		}
		this.props.setHeight('20%');
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (e.target.value.toLowerCase() == "3") {
			this.state.color = '#c8cec7';
			this.state.color2 = '#ecb9ec';
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div style={{'text-align':'left','padding':'5px 50px'}}>
				<div className="left-label" style={{'width':'80%'}}>
					<code>
						number_keys =
					</code>
					<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'20%'}}></input>
				</div>
				<div className="left-label" style={{'width':'80%'}}>
					<code>
						<span className="if">if</span> number_keys == 3:<br />
						<span style={{'marginLeft':'2em','color':this.state.color}}>door_open = </span><span style={{'color':this.state.color2}}>true</span><br />
					</code>
				</div>
			</div>
		);
	}
}

export default LevelEightInput;
