import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/*function getPosition(options) {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject)
	);
}*/

class App extends React.Component {
	//React says we need to define render
	//you dont  need to call function inside a class in js

	/*async componentDidMount(){
		const lati =  await getPosition(
			position => {
				//DO THIS
				return (position);
				//not thi
				// this.state.lat = postion.coords.latitude
			},
			err => console.log(err)
		);
		console.log(lati.coords.latitude);
		this.setState({lat:lati.coords.latitude});
	}*/

	/*constructor(props) {
		super(props);
		//This is the only time we directly change the state obj value
		this.state = { lat: null, errorMessage: '' };
	}*/

	//same thing that in contructor function but cleaner
	state = {
		lat: null,
		errorMessage: '',
		waitingMessage: 'Please accept locaciont request ',
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			pos => {
				this.setState({ lat: pos.coords.latitude });
			},
			err => {
				console.log(err);
				this.setState({ errorMessage: err.message });
			}
		);
	}


	//Conditional Rendering Outside the render
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error : {this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Spinner message={this.state.waitingMessage} />;
		}
	}

	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
