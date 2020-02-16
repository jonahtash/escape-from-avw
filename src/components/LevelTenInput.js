import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelTenInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "1",
			color1: '#c8cec7',
			color2: '#ff8585',
			color3: '#ff8585'
		}
		this.props.setHeight('30%');
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
		if (parseInt(e.target.value) < 4) {
			this.state.color1 = '#c8cec7';
			this.state.color2 = '#ff8585';
			this.state.color2 = '#ff8585';
		} else if (parseInt(e.target.value) >= 6) {
			this.state.color1 = '#ff8585';
			this.state.color2 = '#c8cec7';
			this.state.color3 = '#ff8585';
		} else if (parseInt(e.target.value) == 5){
			this.state.color1 = '#ff8585';
			this.state.color2 = '#ff8585';
			this.state.color3 = '#c8cec7';
			this.props.setSolve(true);
		}
	}

	render () {
		return (
			<div style={{'text-align':'left','padding':'5px 50px'}}>
				<div className="left-label" style={{'width':'80%'}}>
					<code>
						count =
					</code>
					<input id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="right-input" style={{'width':'20%'}}></input>
				</div>
				<div className="left-label" style={{'width':'80%','font-size':'23px'}}>
					<code>
						<span className="if">if</span> count &lt; 4:<br />
						<span style={{'margin-left':'2em','color':this.state.color1}}>room_number = room_number + 1</span><br />
						<span className="if">elif count &gt; = 6</span><br />
						<span style={{'margin-left':'2em','color':this.state.color2}}>room_number = room_number + 2</span><br />
						<span className="if">else</span><br />
						<span style={{'margin-left':'2em','color':this.state.color3}}>room_number = room_number + 3</span><br />
					</code>
				</div>
			</div>
		);
	}
}

export default LevelTenInput;
