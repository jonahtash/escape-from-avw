import React from 'react';
import ScenePanel from './ScenePanel';
import InputPanel from './InputPanel';
import Paper from '@material-ui/core/Paper';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 12,
			solved: false,
			i: 0,
			j: 0
		}
		this.setSolve = this.setSolve.bind(this);
		this.advance = this.advance.bind(this);
		this.setI = this.setI.bind(this);
		this.setJ = this.setJ.bind(this);
		this.scenePanel = React.createRef()
	}
	setI(v) {
		if((v === parseInt(v, 10))) {
			this.scenePanel.current.setI(v);
			this.setState({i: v});
		}

	}
	setJ(v) {
		if((v === parseInt(v, 10))) {
			this.scenePanel.current.setJ(v);
			this.setState({j: v});
		}
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
				<ScenePanel level={this.state.level} solved={this.state.solved} setSolve={this.setSolve} advance={this.advance} i={this.state.i} j={this.state.j} ref={this.scenePanel}/>
				<InputPanel setSolve={this.setSolve} level={this.state.level} advance={this.advance} setI={this.setI} setJ={this.setJ}/>
			</Paper>
		);
	}
}

export default Game;
