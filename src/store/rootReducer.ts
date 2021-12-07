import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = (asyncReducers?: any): any => combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
