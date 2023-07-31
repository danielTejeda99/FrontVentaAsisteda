import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    saleForm: [],
	id: ''
}

export const userSaleFormSlice = createSlice({
	name: 'userSaleForm',
	initialState,
	reducers: {
		setSalesForm(state, action: PayloadAction<any>) {
			const { saleForm} = action.payload;
			state.saleForm = saleForm;
		  },
		  setIdForm(state, action: PayloadAction<any>){
			const { id} = action.payload;
			state.id = id;
		  }
	},
})

export const { setSalesForm,setIdForm} = userSaleFormSlice.actions
export default userSaleFormSlice.reducer;
