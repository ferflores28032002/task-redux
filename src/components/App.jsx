import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Taks } from "./Taks";
import { ToastContainer } from "react-toastify";
import { UpdateTask } from "./UpdateTask";
import { Header } from "./Header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Taks />{" "}
              </>
            }
          />
          <Route
            path="/updateTask/:id"
            element={
              <>
                <Header />
                <UpdateTask />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
