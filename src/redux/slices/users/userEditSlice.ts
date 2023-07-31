import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    name: '',
    lastName: '',
    id: '',
    address: '',
    email: '',
    number: '',
    typeId: null,
    roleId: null,
    userId: '',
	usagePolicy: ''
}

export const userEditSlice = createSlice({
	name: 'userEdit',
	initialState,
	reducers: {
		setUserEdit(state, action: PayloadAction<any>) {
			const { name, lastName, id, address, email, number, typeId, roleId,userId} = action.payload;
			state.name = name;
			state.lastName = lastName;
			state.id = id;
			state.address = address;
			state.email = email;
			state.number = number;
			state.typeId = typeId;
			state.roleId = roleId;
			state.userId = userId;
		  },
		setUserPolicy(state, action: PayloadAction<any>){
			const { usagePolicy} = action.payload;
			state.usagePolicy = usagePolicy;

		}
	},
})

export const { setUserEdit,setUserPolicy} = userEditSlice.actions
export default userEditSlice.reducer;
