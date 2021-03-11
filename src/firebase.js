import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBuVl2zM9s5NCMUJbn1VJtYv4jv5INuSDY',
	authDomain: 'watchlist-maker-6b129.firebaseapp.com',
	projectId: 'watchlist-maker-6b129',
	storageBucket: 'watchlist-maker-6b129.appspot.com',
	messagingSenderId: '792950156390',
	appId: '1:792950156390:web:f0db8f988838ebb69791a7',
	measurementId: 'G-MNVF67PXTS'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
