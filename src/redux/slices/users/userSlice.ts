import { PayloadAction, createSlice } from '@reduxjs/toolkit'



const initialState: any = {
	email: '',
	identification: '',
	identificationType: '',
	name: '',
	lastname: '',
	phone: '',
	roleId: 0,
	address: '',
	modules: []
	
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<any>) {
			const { email, identification, identificationType, name, lastname, phone, roleId, address,modules } = action.payload;
			state.email = email;
			state.identification = identification;
			state.identificationType = identificationType;
			state.name = name;
			state.lastname = lastname;
			state.phone = phone;
			state.roleId = roleId;
			state.address = address;
			state.modules = modules

		  }
		// extraReducers: {
		//   [HYDRATE]: (state, action) => {
		//     return {
		//       ...state,
		//       ...action.payload.demito,
		//     }
		//   }
		// }
	},
})

export const { setUser} = userSlice.actions
export default userSlice.reducer;
