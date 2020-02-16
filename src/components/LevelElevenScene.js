import React from 'react';
import Paper from '@material-ui/core/Paper';
import Door1 from '../img/Door1.png';
import Door2 from '../img/Door1_Open.png';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

class LevelSevenScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hint: false,
			anchor: null
		}
		this.showHint = this.showHint.bind(this);
	}

	showHint(e) {
		this.setState({hint:!this.state.hint, anchor: e.currentTarget})
	}

	render () {
		let Door, ClickAction;
		if (this.props.solved) {
			Door = Door2;
			ClickAction = this.props.advance;
		} else {
			Door = Door1;
			ClickAction = this.showHint;
		}
		return (
			<div style={{'display': 'inline-block', 'height': '100%'}}>
			<Popper open={this.state.hint} anchorEl={this.state.anchor} placement='left' transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper className='hint-paper'>
							<Typography>Try setting the values of <code><b>take_elevator</b></code> <span>and</span> <code><b>take_stairs</b></code> <span></span></Typography>
							<Typography>based on whether or not the elevator is working.</Typography>
							<Typography>Be careful, indentation matters!</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
				<img src={Door} alt="door" className="door-image" onClick={ClickAction}/>
			</div>
		);
	}
}

export default LevelSevenScene;
