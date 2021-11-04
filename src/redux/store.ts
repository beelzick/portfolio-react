import { configureStore } from '@reduxjs/toolkit'
import slideIndexSlice from './slideIndexSlice'

export const store = configureStore({
    reducer: {
        slideIndex: slideIndexSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
