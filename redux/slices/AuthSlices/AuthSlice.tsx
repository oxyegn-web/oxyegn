import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "@/redux/Apis/Axios";
import {AxiosError} from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface SignupData {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    user?: any;
    token?: string;
    _id?: any;
    data?: string;
    fcmToken?: string;
  }  

interface UserState {
    _id: any;
    user: any;
    loading: boolean;
    error: string | null;
    token: string;
  }
  
  const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
    token: "",
    _id: "",
  };

  export const SignupUser = createAsyncThunk(
    "/auth/signup",
    async (userdata: SignupData, { rejectWithValue }) => {
      try {
        const createAccount = await Axios.post('/signup', userdata);
        return createAccount.data;
      } catch (err: any) {
        return rejectWithValue((err as AxiosError).response?.data || err.message);
      }
    }
  );

export const SigninUser = createAsyncThunk("/auth/login", 
    async(userdata) => {
        try{
            const createAccount = await Axios.post('/login', userdata);
            return createAccount.data;
        }catch(err: any){
            throw (err as AxiosError).response?.data || err.message;
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(SignupUser.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(SignupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        })
        .addCase(SignupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Error while creating account"
        })
        .addCase(SigninUser.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(SigninUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            Cookies.set("token", action.payload.token);
            const decodedToken: any = jwtDecode(action.payload.token);
        })
        .addCase(SigninUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Error while creating account"
        })
      },
})


export default userSlice.reducer;


// state.loading = false;
// state.user = action.payload.user;
// state._id = action.payload.user._id;
// state.user.token = action.payload.token;
// Cookies.set("token", action.payload.token);
// const decodedToken: any = jwtDecode(action.payload.token);
// state.accountType = decodedToken.accountType;