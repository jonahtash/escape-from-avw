import React from 'react';
import Paper from '@material-ui/core/Paper';
import LevelOneScene from './LevelOneScene';

class ScenePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render () {
		let scene;
		if (this.props.level == 0) {
			scene = <LevelOneScene solved={this.props.solved} setSolve={this.props.setSolve}/>
		}
		return (
			<Paper className="scene-paper">
				{scene}
			</Paper>
		);
	}
}

export default ScenePanel;
