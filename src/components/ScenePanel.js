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
import LevelTwelveScene from './LevelTwelveScene';
import LevelThreeteenScene from './LevelThreeteenScene';

class ScenePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			i:0,
			j:0
		};
		this.setI = this.setI.bind(this);
		this.setJ = this.setJ.bind(this);
		this.threeteen = React.createRef();
	}

	setI(v) {
		if((v === parseInt(v, 10)) && v <100 && v > -100) {
			this.threeteen.current.setI(v);
			this.setState({i: v});
		}

	}
	setJ(v) {
		if((v === parseInt(v, 10))) {
			this.threeteen.current.setJ(v);
			this.setState({j: v});
		}
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
		if (this.props.level == 11) {
			scene = <LevelTwelveScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance}/>
		}
		if (this.props.level == 12) {
			scene = <LevelThreeteenScene solved={this.props.solved} setSolve={this.props.setSolve} advance={this.props.advance} ref={this.threeteen} i={this.state.i} j={this.state.j}/>
		}
		return (
			<Paper className="scene-paper">
				{scene}
			</Paper>
		);
	}
}

export default ScenePanel;
