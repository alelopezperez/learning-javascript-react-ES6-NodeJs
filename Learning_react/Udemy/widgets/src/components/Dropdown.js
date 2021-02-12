import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClicked = event => {
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}
			console.log('Im here');
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClicked, {
			capture: true,
		});
		return () => {
			console.log('bye');
			document.body.removeEventListener('click', onBodyClicked, {
				capture: true,
			});
		};
	}, []);

	const renderedOptions = options.map(option => {
		if (option.value === selected.value) return null;
		return (
			<div
				key={option.value}
				onClick={() => onSelectedChange(option)}
				className="item"
			>
				{option.label}
			</div>
		);
	});
	console.log(ref);
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${
						open ? 'visible active' : ''
					}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
