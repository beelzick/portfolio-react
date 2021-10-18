import { createSlice } from '@reduxjs/toolkit'

const initialState = { slideIndex: 1 }

const slideIndexSlice = createSlice({
    name: 'slideIndex',
    initialState,
    reducers: {
        setSlideIndex: (state, action) => {
            state.slideIndex = action.payload
        }
    }
})

export const { setSlideIndex } = slideIndexSlice.actions

export const selectSlideIndex = state => state.slideIndex.slideIndex

export default slideIndexSlice.reducer