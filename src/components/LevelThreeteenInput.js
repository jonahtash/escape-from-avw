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
		console.log(text);
		if (text.split(" ") && text.split(" ").length == 2) {
			this.props.setI(parseInt(text.split(" ")[0]));
			this.props.setJ(parseInt(text.split(" ")[1]));
		}

		if(parseInt(text.split(" ")[0]) == 3 && parseInt(text.split(" ")[1]) == 3)
		this.props.setSolve(true);
	}
	builtinRead(x) {
	    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
	        throw "File not found: '" + x + "'";
	    return Sk.builtinFiles["files"][x];
	}
	runit() {
	 this.setState({outs: []});
   var prog = "i = 0\nj = 0\ndirection = \"up\"\ndef move_forward():\n    \n    global i\n    global j\n    if (direction == \"up\"):\n        i += 1\n    elif (direction == \"down\"):\n        i -= 1\n    elif (direction == \"right\"):\n        j += 1\n    elif (direction == \"left\"):\n        j -= 1\ndef turn(s):\n    global direction\n    if (s == \"right\" and direction == \"up\"):\n        direction = \"right\"\n    elif (s == \"left\" and direction == \"up\"):\n        direction = \"left\"\n    elif (s == \"right\" and direction == \"right\"):\n        direction = \"down\"\n    elif (s == \"right\" and direction == \"left\"):\n        direction = \"up\"\n    elif (s == \"left\" and direction == \"right\"):\n        diretion = \"up\"\n    elif (s == \"left\" and direction == \"left\"):\n        direction = \"down\"\n"
	 prog = prog + this.state.inputVal + "\nprint str(i)+\" \"+str(j)\n";
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
