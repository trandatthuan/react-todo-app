import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
	// Properties
	const [input, setInput] = useState(props.edit ? props.edit.value : '');
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	// Handling events
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});

		setInput('');
	};

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input
						text='text'
						placeholder='Update your item'
						value={input}
						name='text'
						className='todo-input edit'
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className='todo-button edit'>Update todo</button>
				</>
			) : (
				<>
					<input
						text='text'
						placeholder='Add todo'
						value={input}
						name='text'
						className='todo-input'
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className='todo-button'>Add todo</button>
				</>
			)}
			)
		</form>
	);
}

export default TodoForm;
