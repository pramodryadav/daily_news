import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
interface UsersState {
  name: string,
  lastname:string,
  email:string,
  given_name:string
}

// Define the initial state using that type
const initialState: UsersState = {
  name: "",
  lastname:"",
  email:"",
  given_name:""
}

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return {...state, ...action.payload}
    },
  },
})

export const { setUserData  } = counterSlice.actions
export default counterSlice.reducer