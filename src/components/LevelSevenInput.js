import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sk from 'skulpt';

class LevelSevenInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: ""
		}
		this.props.setHeight('25%');
		this.onLabelChange = this.onLabelChange.bind(this);
		this.runit = this.runit.bind(this);
		this.outf = this.outf.bind(this);
	}

	onLabelChange(e) {
		this.setState({inputVal: e.target.value});
	}

	outf(text) {
		if (text == "2832211") {
			this.props.setSolve(true);
		}
	}
	builtinRead(x) {
	    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
	        throw "File not found: '" + x + "'";
	    return Sk.builtinFiles["files"][x];
	}
	runit() {
   var prog = "nDew_ritos = 1231421\nThe_dew = 123123\n"
	 prog = prog + this.state.inputVal + "\nprint total_price";
   Sk.pre = "output";
   Sk.configure({output:this.outf, read:this.builtinRead});
	 try {
		 Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>",false,prog,true);
     });
	 } catch (e) {
			 console.log(e);
	 }
}

	render () {
		return (
			<div className="left-label" style={{'width':'80%'}}>
				<textarea cols="50" rows="5" id="input" value={this.state.inputVal} onChange={this.onLabelChange} className="code-area"></textarea>
				<Button variant="contained" color="primary" onClick={this.runit} className="run-button" style={{'margin-bottom':'15%','margin-left':'15px'}}>Run</Button>
			</div>
		);
	}
}

export default LevelSevenInput;
