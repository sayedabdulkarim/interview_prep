import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import HomeScreen from "../components/Home";
import AboutScreen from "../components/About";
import UsersScreen from "../components/Users";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeScreen />} />

      <Route path="about" element={<AboutScreen />} />
      <Route path="users" element={<UsersScreen />} />

      <Route path="*" element={<h1>404 Component</h1>} />
    </Route>
  )
);
