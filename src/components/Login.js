import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { login } from '../store/entities/user'
import ErrorMessage from './ErrorMessage'

import Input from './Input'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const dispath = useDispatch()

	function handleSubmit(e) {
		e.preventDefault()

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispath(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName
					})
				)
			})
			.then(() => {
				setError('')
			})
			.catch((error) => {
				setError('')
				setError(error.message)
			})
	}

	return (
		<div className='container mx-auto mt-4 flex flex-col items-center mb-20'>
			<h2 className='text-lg font-bold uppercase text-gray-500'>Log In</h2>
			{error && <ErrorMessage message={error} />}
			<form
				className='w-2/3 flex intems-center flex-col'
				onSubmit={handleSubmit}
			>
				<Input
					label='Email'
					id='email'
					type='email'
					value={email}
					onChangeHandler={setEmail}
				/>
				<Input
					label='Password'
					id='password'
					type='password'
					value={password}
					onChangeHandler={setPassword}
				/>

				<Link to='/signup' className='block mt-4 text-blue-600'>
					Don't have an account?
				</Link>
				<button
					type='submit'
					className='mt-10 text-gray-500 border px-6 py-2 font-bold rounded border-gray-500 uppercase hover:text-gray-100 hover:bg-gray-500 focus:outline-none transition duration-150 z'
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Login
