import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FindJobs, Home } from "../pages";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/find" element={<FindJobs />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
