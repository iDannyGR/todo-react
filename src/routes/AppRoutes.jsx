import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {HomePage}  from "../pages/HomePage";
import EditTodo from "../pages/EditTodo";
import NewTodo from "../pages/NewTodo";
import NotFound from "../pages/NotFound";
const AppRoutes = () => {
  return (
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit/:id" element={<EditTodo/>} />
                <Route path="/new" element={<NewTodo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
        </>
  );
};
export { AppRoutes };
