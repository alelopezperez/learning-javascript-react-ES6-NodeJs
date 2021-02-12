import React, { useState } from 'react';
import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js';
import Route from './components/Route.js';
import Header from './components/Header.js';

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

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A Shade of Blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>

			<Route path="/list">
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					label={'Select A Color'}
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>

			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
