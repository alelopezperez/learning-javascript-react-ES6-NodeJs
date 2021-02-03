import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar.js';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		console.log(term);
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term,
			},
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar
					onSubmit={this.onSearchSubmit}
					onSecond={this.onSecond}
				/>
				Found {this.state.images.length} images
			</div>
		);
	}
}

export default App;
