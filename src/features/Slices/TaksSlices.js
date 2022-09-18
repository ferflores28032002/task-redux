import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];

export const TaksSlices = createSlice({
  name: "TaksSlices",
  initialState,
  reducers: {
    addTaks: (state, action) => {
      let dato = action.payload;
      let pushState = { ...dato, stateTask: "false" };
      state.push(pushState);
      localStorage.setItem("task", JSON.stringify(state));
    },
    updateState: (state, action) => {
      let id = action.payload;

      let positionId = state.findIndex((element) => element.id === id);
      if (positionId >= 0) {
        if (state[positionId].stateTask === "false") {
          state[positionId].stateTask = "true";
        } else {
          state[positionId].stateTask = "false";
        }
        localStorage.setItem("task", JSON.stringify(state));
      }
    },
    deleTask: (state, action) => {
      const id = action.payload;
      const nuevoArray = state.filter((datos) => datos.id !== id);
      const retorno = (state = nuevoArray);
      toast.success("¡ task deleted successfully !", {
        position: "top-center",
      });

      localStorage.setItem("task", JSON.stringify(state));
      return retorno;
    },
    updateTask: (state, action) => {
      const { id, task, description } = action.payload;
      const update = state.findIndex((dato) => dato.id === id);
      state[update].task = task;
      state[update].description = description;
      toast.success("¡ task modified successfully !", {
        position: "top-right",
      });
      localStorage.setItem("task", JSON.stringify(state));
    },
  },
});

export default TaksSlices.reducer;
export const { addTaks, updateState, deleTask, updateTask } =
  TaksSlices.actions;
