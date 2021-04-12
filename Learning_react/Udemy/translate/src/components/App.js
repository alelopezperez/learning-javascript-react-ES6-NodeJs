import React from 'react';
import UserCreate from './UserCreate.js';
import { LanguageStore } from '../contexts/LanguageContext.js';
import ColorContext from '../contexts/ColorContext.js';
import LanguageSelector from './LanguageSelector.js';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
