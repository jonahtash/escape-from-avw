import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelNineInput extends React.Component {
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
		if (parseInt(e.target.value) >= 4) {
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
						number_balls =
					</code>
					<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'20%'}}></input>
				</div>
				<div className="left-label" style={{'width':'80%'}}>
					<code>
						<span className="if">if</span> number_ball &lt; 3:<br />
						<span style={{'marginLeft':'2em','color':this.state.color3}}>door_open = </span><span style={{'color':this.state.color4}}>false</span><br />
						<span className="if">else</span><br />
						<span style={{'marginLeft':'2em','color':this.state.color}}>door_open = </span><span style={{'color':this.state.color2}}>true</span><br />
					</code>
				</div>
			</div>
		);
	}
}

export default LevelNineInput;
