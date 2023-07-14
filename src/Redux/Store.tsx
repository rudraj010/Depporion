import { configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux/es/exports';

import UserSlice from './UserSlice';

export const store= configureStore({
    reducer:{
        user:UserSlice
    }
})

export type RootState= ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch