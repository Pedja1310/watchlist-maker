import React from 'react'

function ErrorMessage({ message }) {
	return (
		<div className='py-2 w-2/3 mx-auto'>
			<p className='text-red-500'>{message}</p>
		</div>
	)
}

export default ErrorMessage
