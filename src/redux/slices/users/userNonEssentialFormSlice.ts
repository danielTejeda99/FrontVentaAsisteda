import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    nonEssentialForm: [],
	id: ''
}

export const userNonEssentialFormSlice = createSlice({
	name: 'userNonEssentialForm',
	initialState,
	reducers: {
		setNonEssentialForm(state, action: PayloadAction<any>) {
			const { nonEssentialForm} = action.payload;
			state.nonEssentialForm = nonEssentialForm;
		  },
		  setIdForm(state, action: PayloadAction<any>){
			const { id} = action.payload;
			state.id = id;
		  }
	},
})

export const { setNonEssentialForm,setIdForm} = userNonEssentialFormSlice.actions
export default userNonEssentialFormSlice.reducer;
