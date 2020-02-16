import React from 'react';
import Paper from '@material-ui/core/Paper';
import LevelOneInput from './LevelOneInput';

class InputPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 0
		}
	}

	render () {
		let input;
		if (this.state.level == 0) {
			input = <LevelOneInput solved={this.props.solved} setSolve={this.props.setSolve}/>
		}
		return (
			<Paper className='input-paper'>
				{input}
			</Paper>
		);
	}
}

export default InputPanel;
