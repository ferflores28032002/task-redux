import TaksSlices from "../Slices/TaksSlices";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    taks: TaksSlices,
  },
});

export default Store;
