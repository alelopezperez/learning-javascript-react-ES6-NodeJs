import React from 'react';
import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
const items = [
	{
		title: 'What is React?',
		content: 'React is a frontend javascript framework',
	},
	{
		title: 'Why use React',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];
const App = () => {
	return (
		<div>
			<Search />
		</div>
	);
};

export default App;
