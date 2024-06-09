import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface UsersState {
    value: string,
 
}

// Define the initial state using that type
const initialState: UsersState = {
  value: "",
  
}

export const searchSlice = createSlice({
  name: 'search',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchText: (state, action:PayloadAction<string>) => {
      state.value= action.payload;
    },
  },
})

export const { setSearchText  } = searchSlice.actions
export default searchSlice.reducer