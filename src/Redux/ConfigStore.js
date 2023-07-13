import { configureStore } from "@reduxjs/toolkit";
import arrFromRedux from "./Reducer/arrForm";
export const store = configureStore({
  reducer: {
    hoTen: (state = "Anh Tuan", action) => {
      switch (action.type) {
        case "DOITEN":
          state = action.payload;
          break;

        default:
          break;
      }
      return state;
    },
    arrForm: arrFromRedux,
  },
});
