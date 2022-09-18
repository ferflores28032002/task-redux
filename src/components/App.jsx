import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Taks } from "./Taks";
import {ToastContainer} from 'react-toastify';
import { UpdateTask } from "./UpdateTask";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Taks />} />
          <Route path="/updateTask/:id" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
