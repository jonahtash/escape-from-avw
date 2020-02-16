import React from 'react';
import TextField from '@material-ui/core/TextField';

class LevelFourInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			right1: "",
			left1: "",
			right2: "",
			left2: ""
		}
		this.props.setHeight('20%');
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	onLabelChange(i, e) {
		if (i == 1) {
			this.setState({left1: e.target.value});
			if (((e.target.value.toLowerCase() == "password"  && this.state.right1.toLowerCase() == "\"shrubbery\"" || this.state.right1.toLowerCase() == "'shrubbery'") &&
					(this.state.left2.toLowerCase() == "number_keys"  && this.state.right2.toLowerCase() == "2")) ||
					((this.state.left2.toLowerCase() == "password"  && this.state.right2.toLowerCase() == "\"shrubbery\"" || this.state.right2.toLowerCase() == "'shrubbery'") &&
							(e.target.value.toLowerCase() == "number_keys"  && this.state.right1.toLowerCase() == "2"))
			) {
				this.props.setSolve(true);
			}
		}
		if (i == 2) {
			this.setState({right1: e.target.value});
			if (((this.state.left1.toLowerCase() == "password"  && e.target.value.toLowerCase() == "\"shrubbery\"" || e.target.value.toLowerCase() == "'shrubbery'") &&
					(this.state.left2.toLowerCase() == "number_keys"  && this.state.right2.toLowerCase() == "2")) ||
					((this.state.left2.toLowerCase() == "password"  && this.state.right2.toLowerCase() == "\"shrubbery\"" || this.state.right2.toLowerCase() == "'shrubbery'") &&
							(this.state.left1.toLowerCase() == "number_keys"  && e.target.value.toLowerCase() == "2"))
			) {
				this.props.setSolve(true);
			}
		}
		if (i == 3) {
			this.setState({left2: e.target.value});
			if (((this.state.left1.toLowerCase() == "password"  && this.state.right1.toLowerCase() == "\"shrubbery\"" || this.state.right1.toLowerCase() == "'shrubbery'") &&
					(e.target.value.toLowerCase() == "number_keys"  && this.state.right2.toLowerCase() == "2")) ||
					((e.target.value.toLowerCase() == "password"  && this.state.right2.toLowerCase() == "\"shrubbery\"" || this.state.right2.toLowerCase() == "'shrubbery'") &&
							(this.state.left1.toLowerCase() == "number_keys"  && this.state.right1.toLowerCase() == "2"))
			) {
				this.props.setSolve(true);
			}
		}
		if (i == 4) {
			this.setState({right2: e.target.value});
			if (((this.state.left1.toLowerCase() == "password"  && this.state.right1.toLowerCase() == "\"shrubbery\"" || this.state.right1.toLowerCase() == "'shrubbery'") &&
					(this.state.left2.toLowerCase() == "number_keys"  && e.target.value.toLowerCase() == "2")) ||
					((this.state.left2.toLowerCase() == "password"  && e.target.value.toLowerCase() == "\"shrubbery\"" || e.target.value.toLowerCase() == "'shrubbery'") &&
							(this.state.left1.toLowerCase() == "number_keys"  && this.state.right1.toLowerCase() == "2"))
			) {
				this.props.setSolve(true);
			}
		}

	}




	render () {
		return (
			<div>
				<div className="left-label" style={{'width':'90%'}}>
					<input id="input" value={this.state.left1} onChange={(e) => {this.onLabelChange(1, e)}} className="left-input" style={{'width':'35%','fontSize':'25px','padding':'5px'}} />
					<code>
						=
					</code>
					<input id="input" value={this.state.right1} onChange={(e) => {this.onLabelChange(2, e)}} className="right-input" style={{'width':'50%','fontSize':'25px','padding':'5px'}} />
				</div>
				<div className="left-label" style={{'width':'90%'}}>
					<input id="input" value={this.state.left2} onChange={(e) => {this.onLabelChange(3, e)}} className="left-input" style={{'width':'35%','fontSize':'25px','padding':'5px'}} />
					<code>
							=
					</code>
					<input id="input" value={this.state.right2} onChange={(e) => {this.onLabelChange(4, e)}} className="right-input" style={{'width':'50%','fontSize':'25px','padding':'5px'}} />
				</div>
			</div>
		);
	}
}

export default LevelFourInput;
