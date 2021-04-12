import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';
import ColorContext from '../contexts/ColorContext.js';

class Button extends React.Component {
	render() {
		return (
			<ColorContext.Consumer>
				{(color) => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{val =>
								val.language === 'english' ? 'Submit' : 'Voorleggen'
							}
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
