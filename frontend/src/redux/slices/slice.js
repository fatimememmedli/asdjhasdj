import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fav: ["salam men favoritem"],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    addFav: (state, action) => {
      state.fav.push(action.payload)

    },
  },
})

// Action creators are generated for each case reducer function
export const { addFav} = productSlice.actions

export default productSlice.reducer