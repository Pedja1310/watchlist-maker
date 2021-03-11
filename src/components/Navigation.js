import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { isUserLoggedIn, logout } from '../store/entities/user'

function Navigation() {
	const isLoggedIn = useSelector(isUserLoggedIn)
	const dispatch = useDispatch()

	const logoutOfApp = () => {
		dispatch(logout())
		auth.signOut()
	}

	return (
		<>
			<nav
				className='w-full py-4 bg-white border-b-2 border-gray-100'
				aria-label='main navigation '
			>
				<div className='container mx-auto flex items-center justify-center'>
					<div className='w-8'>
						<Link to='/'>
							<img src='/images/icons/logo.png' alt='' />
						</Link>
					</div>
					<div className='items-center hidden'>
						<Link
							to='/login'
							className='text-gray-500 border px-6 py-2 font-bold rounded border-gray-500 uppercase hover:text-gray-100 hover:bg-gray-500 focus:outline-none transition duration-150'
						>
							Login
						</Link>
						<Link
							to='/signup'
							className='text-gray-500 border px-6 py-2 font-bold rounded border-gray-500 uppercase hover:text-gray-100 hover:bg-gray-500 focus:outline-none transition duration-150'
						>
							Signup
						</Link>
					</div>
				</div>
			</nav>
			<nav className='w-full py-3 bg-white border-t-2 border-gray-100 bottom-0 fixed z-50'>
				<div className='container mx-auto flex justify-evenly'>
					{!isLoggedIn ? (
						<>
							<Link
								to='/login'
								className='text-gray-500 text-xs uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/login.png'
									alt='Login Icon'
									width='16'
								/>
								Login
							</Link>
							<Link
								to='/signup'
								className='text-gray-500 text-xs uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/signup.png'
									alt='Signup Icon'
									width='16'
								/>
								Signup
							</Link>
						</>
					) : (
						<>
							<Link
								to='/movie/popular'
								className='text-gray-500 text-xs  uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/trending.png'
									alt='Signup Icon'
									width='16'
								/>
								Titles
							</Link>
							<Link
								to='/movie/top_rated'
								className='text-gray-500 text-xs uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/watchlist.png'
									alt='Signup Icon'
									width='16'
								/>
								Watchlist
							</Link>
							<Link
								to='/tv/popular'
								className='text-gray-500 text-xs uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/watched.png'
									alt='Signup Icon'
									width='16'
								/>
								Watched
							</Link>
							<Link
								to='/tv/top_rated'
								className='text-gray-500 text-xs  uppercase flex flex-col items-center'
							>
								<img
									src='/images/icons/logout.png'
									alt='Signup Icon'
									width='16'
									onClick={logoutOfApp}
								/>
								Logut
							</Link>
						</>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navigation
