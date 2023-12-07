import React, { useEffect } from "react";
import Login from "./pages/Login";
import instance from "./axios/Config";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./components/Tasks";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await instance.get("users");
        console.log(response.data);
        localStorage.setItem("users", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />}>
          <Route index element={<Tasks />} />
          {/* <Route path="" element={<Tasks/>}/> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
