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
	usagePolicy: '',
	isActive: null,
	allies: [],
	usagePolicyParticular: ''
}

export const userEditSlice = createSlice({
	name: 'userEdit',
	initialState,
	reducers: {
		setUserEdit(state, action: PayloadAction<any>) {
			const { name, lastName, id, address, email, number, typeId, roleId,userId, isActive} = action.payload;
			state.name = name;
			state.lastName = lastName;
			state.id = id;
			state.address = address;
			state.email = email;
			state.number = number;
			state.typeId = typeId;
			state.roleId = roleId;
			state.userId = userId;
			state.isActive = isActive;
		  },
		setUserPolicy(state, action: PayloadAction<any>){
			const { usagePolicy, usagePolicyParticular} = action.payload;
			state.usagePolicy = usagePolicy;
			state.usagePolicyParticular = usagePolicyParticular;
		},
		setAllies(state, action: PayloadAction<any>){
			const { allies} = action.payload;
			state.allies = allies;
		}
	},
})

export const { setUserEdit,setUserPolicy, setAllies} = userEditSlice.actions
export default userEditSlice.reducer;
