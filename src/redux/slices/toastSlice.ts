import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {
	show: false,
	message: '',
	type: '',	
}

export const toastSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		setToast(state, action: PayloadAction<any>) {
			const { show,message,type } = action.payload;
			state.show = show;
			state.message = message;
			state.type = type;
		  }
	},
})

export const { setToast} = toastSlice.actions
export default toastSlice.reducer;
