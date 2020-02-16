import React from 'react';
import Paper from '@material-ui/core/Paper';
import LevelOneInput from './LevelOneInput';
import LevelTwoInput from './LevelTwoInput';
import LevelThreeInput from './LevelThreeInput';
import LevelFourInput from './LevelFourInput';
import LevelFiveInput from './LevelFiveInput';
import LevelSixInput from './LevelSixInput';


class InputPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '10%'
		}
		this.setHeight = this.setHeight.bind(this)
	}

	setHeight(h) {
		this.setState({height:h});
	}

	render () {
		let input;

		if (this.props.level == 0) {
			input = <LevelOneInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 1) {
			input = <LevelTwoInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 2) {
			input = <LevelThreeInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 3) {
			input = <LevelFourInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance} setHeight={this.setHeight}/>
		}
		if (this.props.level == 4) {
			input = <LevelFiveInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance} setHeight={this.setHeight}/>
		}
		if (this.props.level == 5) {
			input = <LevelSixInput solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance} setHeight={this.setHeight}/>
		}

		return (
			<Paper className='input-paper' style={{'height':this.state.height}}>
				{input}
			</Paper>
		);
	}
}

export default InputPanel;
