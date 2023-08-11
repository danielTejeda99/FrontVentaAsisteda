import { configureStore } from '@reduxjs/toolkit'
import { userSlice,toastSlice, userEditSlice,userSaleFormSlice, userNonEssentialFormSlice } from './slices'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
	reducer: {
		userReducer: userSlice,
		toastReducer: toastSlice,
		userEditReducer: userEditSlice,
		userSalesFormReducer: userSaleFormSlice,
        userNonEssentialFormReducer: userNonEssentialFormSlice
	},

	// middleware: (getDefaultMiddleware: any) =>
	// 	getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
