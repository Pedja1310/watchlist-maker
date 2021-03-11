import React from 'react'

function Input({ label, type, id, value, onChangeHandler }) {
	return (
		<div className='flex flex-col mt-3'>
			<label htmlFor={id} className='text-gray-500 '>
				{label}
			</label>
			<input
				type={type}
				id={id}
				className='border mt-1 rounded-sm text-gray-700 p-2 focus:outline-none'
				value={value}
				onChange={(e) => onChangeHandler(e.target.value)}
			/>
		</div>
	)
}

export default Input
