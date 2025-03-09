import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FindJobs, Forget, Home, JobDetails, Login, SignUp } from "../pages";
import AuthLayout from "../layouts/AuthLayout";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/find" element={<FindJobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
