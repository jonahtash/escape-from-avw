import React from 'react';
import Paper from '@material-ui/core/Paper';
import LevelOneScene from './LevelOneScene';
import LevelTwoScene from './LevelTwoScene';
import LevelThreeScene from './LevelThreeScene';
import LevelFourScene from './LevelFourScene';
import LevelFiveScene from './LevelFiveScene';
import LevelSixScene from './LevelSixScene';
import LevelSevenScene from './LevelSevenScene';
import LevelEightScene from './LevelEightScene';
import LevelNineScene from './LevelNineScene';
import LevelTenScene from './LevelTenScene';
import LevelElevenScene from './LevelElevenScene';

class ScenePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render () {
		let scene;
		if (this.props.level == 0) {
			scene = <LevelOneScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 1) {
			scene = <LevelTwoScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 2) {
			scene = <LevelThreeScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 3) {
			scene = <LevelFourScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 4) {
			scene = <LevelFiveScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 5) {
			scene = <LevelSixScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 6) {
			scene = <LevelSevenScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 7) {
			scene = <LevelEightScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 8) {
			scene = <LevelNineScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 9) {
			scene = <LevelTenScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 10) {
			scene = <LevelElevenScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		return (
			<Paper className="scene-paper">
				{scene}
			</Paper>
		);
	}
}

export default ScenePanel;
