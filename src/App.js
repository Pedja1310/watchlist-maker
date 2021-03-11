import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Titles from './components/Titles'
import TitlePage from './components/TitlePage'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { logout, login } from './store/entities/user'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: user.displayName
					})
				)
			} else {
				dispatch(logout())
			}
		})
	})

	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/:media_type/:category'>
					<Titles />
				</Route>
				<Route exact path='/details/:media_type/:id'>
					<TitlePage />
				</Route>
				<Route path='/signup'>
					<Signup />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route exact to='/'>
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
