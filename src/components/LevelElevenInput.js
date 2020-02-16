import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sk from 'skulpt';

class LevelSevenInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "",
			outs: []
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
		let answer = ["True", "", "False", "", "False", "", "True", ""];
		let solved = true;
		this.state.outs.push(text.trim());
		console.log(this.state.outs);
		if (this.state.outs.length == answer.length) {
			for (var i=0;i<answer.length;i++) {
				solved = solved && answer[i] == this.state.outs[i];
			}
			this.props.setSolve(solved);
		}
	}
	builtinRead(x) {
	    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
	        throw "File not found: '" + x + "'";
	    return Sk.builtinFiles["files"][x];
	}
	runit() {
		this.setState({outs: []})
   var prog = "elevator_working = False\ntake_stairs = None\ntake_elevator = None\n"
	 prog = prog + this.state.inputVal + "\nprint take_stairs, take_elevator\n";
	 prog = prog + "elevator_working = True\ntake_stairs = None\ntake_elevator = None\n"
	 prog = prog + this.state.inputVal + "\nprint take_stairs, take_elevator";
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
