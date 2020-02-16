import React from 'react';
import ScenePanel from './ScenePanel';
import InputPanel from './InputPanel';
import Paper from '@material-ui/core/Paper';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 4,
			solved: false
		}
		this.setSolve = this.setSolve.bind(this);
		this.advance = this.advance.bind(this);
	}

	setSolve(v){
		this.setState({solved:v});
	}

	advance() {
		this.setState({level:this.state.level+1, solved: false});
	}

	render () {
		return (
			<Paper className="game-paper">
				<ScenePanel level={this.state.level} solved={this.state.solved} setSolve={this.setSolve} advance={this.advance}/>
				<InputPanel setSolve={this.setSolve} level={this.state.level} advance={this.advance}/>
			</Paper>
		);
	}
}

export default Game;
