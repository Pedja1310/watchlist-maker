import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// reducers
import titlesSlice from './entities/titles'
import userSlice from './entities/user'

const store = configureStore({
	reducer: { titlesSlice, userSlice },
	middleware: [...getDefaultMiddleware()]
})

export default store
