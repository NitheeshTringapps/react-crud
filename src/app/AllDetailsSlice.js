import { createSlice } from "@reduxjs/toolkit";

export const AllDetailsSlice = createSlice({
    name: 'allDetail',
    initialState: {
        value: []
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        removeUser: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addUser, removeUser } = AllDetailsSlice.actions;

export default AllDetailsSlice.reducer;