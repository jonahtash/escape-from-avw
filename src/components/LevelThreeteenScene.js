import React from 'react';
import Paper from '@material-ui/core/Paper';
import Door1 from '../img/background.png';
import Door2 from '../img/Door1_Open.png';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import ThreeteenCanvas from './ThreeteenCanvas';

class LevelSevenScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hint: false,
			anchor: null,
			i: 0,
			j: 0
		}
		this.showHint = this.showHint.bind(this);
	}

	showHint(e) {
		this.setState({hint:!this.state.hint, anchor: e.currentTarget})
	}
	setI(v) {
		if((v === parseInt(v, 10)) && v <100 && v > -100) {
			console.log(this.state.i + " "+this.state.j+ " "+v);
			this.state.i = v;
			this.forceUpdate();
		}

	}
	setJ(v) {
		if((v === parseInt(v, 10)) && v <100 && v > -100) {
			console.log(this.state.i + " "+this.state.j+ " "+v);
			this.state.j = v;
			this.forceUpdate();
		}
	}
	render () {
		let ClickAction, s, s2;
		if (this.props.solved) {
			s = {'width':'auto', 'height':'80%'};
			s2 = {'display':'none'};
			ClickAction = this.props.advance;
		} else {
			ClickAction = this.props.showHint;
			s = {'width':'0'};
			s2 = {'display':'auto'};;
		}
		return (
			<div style={{'display': 'inline-flex', 'height': '100%'}}>
				<Popper open={this.state.hint} anchorEl={this.state.anchor} placement='left' transition>
					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper className='hint-paper'>
								<Typography >Some <b>functions</b> take <b>parameters</b>.</Typography>
								<Typography><b>Parameters</b> are values listed inside of the parenthesis of a function call.</Typography>
								<Typography>Try choosing an appropriate value of the parameter of <code><b>turn</b></code>.</Typography>
							</Paper>
						</Fade>
					)}
				</Popper>
				<ThreeteenCanvas i={this.props.i} j={this.props.j} style={s2}/>
				<img src={Door2} alt="door" className="door-image" onClick={ClickAction} style ={s}/>
				<Paper className="wordbank">
					<Typography style={{'backgroundColor':'#585858 !important;'}}><code><b>move_forward()</b></code></Typography>
					<Typography style={{'backgroundColor':'#585858 !important;'}}><code><b>turn("right")</b></code></Typography>
					<Typography style={{'backgroundColor':'#585858 !important;'}}><code><b>turn("left")</b></code></Typography>
				</Paper>
			</div>
		);
	}
}

export default LevelSevenScene;
