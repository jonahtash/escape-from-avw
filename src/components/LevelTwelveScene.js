import React from 'react';
import Paper from '@material-ui/core/Paper';
import Door1 from '../img/Scale.png';
import Door2 from '../img/ScaleBalenced.png';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

class LevelTwelveScene extends React.Component {
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
							<Typography><b>Functions</b> are blocks of code that can be called repeatedly.</Typography>
							<Typography>Call a <b>function</b> by writing its name followed by a pair of parenthesis</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
				<img src={Door} alt="door" className="door-image" onClick={ClickAction}/>
			</div>
		);
	}
}

export default LevelTwelveScene;
