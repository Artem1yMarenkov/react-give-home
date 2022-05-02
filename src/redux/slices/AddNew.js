import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    title: '',
    description: '',
    phone: '',
    address: '',
}

const addNewSlice = createSlice({
    name: 'addNew',
    initialState,
    reducers: {
        add_animal(state, action) {
            console.log(state)
            console.log(action)
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
        }
    }
})

export default addNewSlice.reducer
export const {add_animal} = addNewSlice.actions
