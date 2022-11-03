import { createSlice } from '@reduxjs/toolkit'

import { getUserDetails, registerUser, userLogin, logoutUser } from './userAction'

// initialize userToken from local storage

const GoogleAds = (name) => {
    const r = document.cookie.match("\\b" + name + "=([^;]*)\\b")
    return r ? r[1] : null
}

const userToken = GoogleAds('google')

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken

            // state.loading = false
            // state.userInfo = null
            // state.userToken = null
            // state.error = null
            // state.user = null
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // get user details
        [getUserDetails.pending]: (state) => {
            state.loading = true
        },
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        },
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },
        // user logout
        [logoutUser.pending]: (state) => {
            state.loading = true
        },
        [logoutUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = null
        },
        [logoutUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null

            state.user = null


            // state = {}
            // state = undefined

            // return appReducer(state, action);

            // let cleanState = {};
            // Object.keys(this.state).forEach(x => cleanState[x] = null);
            // this.setState(cleanState);

            // sessionStorage.clear()
            // document.cookie.split(";").forEach((c) => {
            //     document.cookie = c
            //         .replace(/^ +/, "")
            //         .replace(/=.*/, "=;max-age=" + 0 + ";path=/")
            // })
        },
    },
})

export { GoogleAds }

export default userSlice.reducer
