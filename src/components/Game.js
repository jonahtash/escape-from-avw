import React from 'react';
import ScenePanel from './ScenePanel';
import InputPanel from './InputPanel';
import Paper from '@material-ui/core/Paper';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 0,
			solved: false
		}
		this.setSolve = this.setSolve.bind(this);
	}

	setSolve(v){
		this.setState({solved:v});
	}

	render () {
		return (
			<Paper className="game-paper">
				<ScenePanel level={this.state.level} solved={this.state.solved} setSolve={this.setSolve}/>
				<InputPanel setSolve={this.setSolve}/>
			</Paper>
		);
	}
}

export default Game;
