import React from 'react';
import ScenePanel from './ScenePanel';
import InputPanel from './InputPanel';
import Paper from '@material-ui/core/Paper';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render () {
		return (
			<Paper className="game-paper">
				<ScenePanel />
				<InputPanel />
			</Paper>
		);
	}
}

export default Game;
