import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

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

export const selectSlideIndex = (state: RootState) => state.slideIndex.slideIndex

export default slideIndexSlice.reducer