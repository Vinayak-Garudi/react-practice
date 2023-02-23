import { createSlice, configureStore } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "allSlice",
    initialState: {
        counter: 0,
        num: 0,
        isLogin: false,
        userName: ""
    },
    reducers: {
        counterAdd(state) {
            state.counter = state.counter + 1
        },
        counterSub(state) {
            state.counter = state.counter - 1
        },
        numAdd(state, action) {
            state.num = state.num + action.payload
        },
        numSub(state, action) {
            state.num = state.num - action.payload
        },
        handleLogin(state) {
            state.isLogin = true
        },
        handleLogout(state) {
            state.isLogin = false
        },
        updateUserName(state, action) {
            state.userName = action.payload
        },
        resetAll(state) {
            state.counter = 0
            state.num = 0
            state.isLogin = false
            state.userName = ""
        }
    }
})

export const actions = appSlice.actions

const store = configureStore({
    reducer: {
        allSlice: appSlice.reducer
    }
})

export default store