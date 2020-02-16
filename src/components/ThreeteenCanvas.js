import React from 'react';
import background from '../img/background.png';

class ThreeteenCanvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
			ctx.beginPath();
			ctx.lineWidth = "6";
			ctx.rect(150, 375, 75, 75);
			ctx.rect(150, 300, 75, 75);
			ctx.rect(150, 225, 75, 75);
			ctx.rect(150, 150, 75, 75);
			ctx.rect(75, 150, 75, 75);
			ctx.rect(0, 150, 75, 75);
			ctx.rect(225, 150, 75, 75);
			ctx.rect(300, 150, 75, 75);
			ctx.rect(375, 150, 75, 75);
			ctx.stroke();
			ctx.beginPath();
			ctx.lineWidth = "10";
			ctx.rect(440, 150, 10, 75);
			ctx.strokeStyle = "#b35900";
			ctx.stroke();
			ctx.beginPath();
			ctx.lineWidth = "10";
			ctx.rect(430, 150, 40, 75);
			ctx.strokeStyle = "black";
			ctx.stroke();
			ctx.beginPath();
			ctx.fillStyle = "red";
			ctx.arc(187 + (this.props.j * 75), 412 - (75 * this.props.i) , 10, 0, 2 * Math.PI);
			ctx.fill();
    }
  }

	componentDidUpdate() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext("2d");
		const img = this.refs.image;
		ctx.clearRect(0, 0, 450, 450);
		ctx.drawImage(img, 0, 0);
		ctx.beginPath();
		ctx.lineWidth = "6";
		ctx.rect(150, 375, 75, 75);
		ctx.rect(150, 300, 75, 75);
		ctx.rect(150, 225, 75, 75);
		ctx.rect(150, 150, 75, 75);
		ctx.rect(75, 150, 75, 75);
		ctx.rect(0, 150, 75, 75);
		ctx.rect(225, 150, 75, 75);
		ctx.rect(300, 150, 75, 75);
		ctx.rect(375, 150, 75, 75);
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = "10";
		ctx.rect(440, 150, 10, 75);
		ctx.strokeStyle = "#b35900";
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = "10";
		ctx.rect(430, 150, 40, 75);
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(187 + (this.props.j * 75), 412 - (75 * this.props.i) , 10, 0, 2 * Math.PI);
		ctx.fill();
	}

  render() {
    return(
      <div style={{'margin-top':'10%'}}>
        <canvas ref="canvas" width={450} height={450} style={this.props.style}/>
        <img ref="image" src={background} style={{'display':'none'}} />
      </div>
    )
  }
}
export default ThreeteenCanvas
