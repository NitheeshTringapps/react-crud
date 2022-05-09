import { configureStore } from "@reduxjs/toolkit";
import AllDetailsReducer from "./AllDetailsSlice";

export default configureStore({
    reducer: {
        allDetail: AllDetailsReducer
    }
})