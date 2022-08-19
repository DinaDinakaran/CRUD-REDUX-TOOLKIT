import { configureStore, createSlice } from "@reduxjs/toolkit"
import list from "../data.json"
import { v4 as uuidv4 } from 'uuid';
const stateslice = createSlice({
    name: "students",
    initialState: {
        studentList: list
    }, reducers: {
        allStudents: (state, action) => {
            state.studentList = action.payload.data
        },
        edit: (state, action) => {
            const edited = action.payload
            console.log(edited)
            const existing = state.studentList.find((item) => item.id === edited.id)
            console.log(existing)
            if (existing) {
                existing.name = edited.name
                existing.email = edited.email
                existing.rank = edited.rank
                existing.age = edited.age
                existing.phone = edited.phone
                existing.id = edited.id
            }

        },
        add: (state, action) => {
            const newdata = action.payload
            state.studentList.push(newdata)
            console.log(state.studentList)
        },
        delete: (state, action) => {
            const deleteData = action.payload
            state.studentList = state.studentList.filter((item) => item.id !== deleteData)

        }
    }
})



export const addaction = stateslice.actions

const store = configureStore({
    reducer: stateslice.reducer

})
export default store;