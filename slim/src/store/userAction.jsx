import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = { headers: { 'Content-Type': 'application/json' } }
            const { data } =
                await axios.post('https://slimmom-backend.goit.global/auth/login',
                    { email, password }, config
                )
            // store user's token in local storage
            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ email, password, username }, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } }
            await axios.post('https://slimmom-backend.goit.global/auth/register',
                { email, password, username }, config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {// get user data from store
            const { user } = getState()
            // configure authorization header with user's token
            const config = { headers: { Authorization: `Bearer ${user.refreshToken}` } }
            const { data } =
                await axios.get(`https://slimmom-backend.goit.global//auth/refresh`, config)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()
            const config = { headers: { Authorization: user.userInfo.accessToken } }
            await axios.get(`https://slimmom-backend.goit.global//auth/logout`, config)
            return {}
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
