import React, { Suspense } from "react";
import "./App.css";
// components and pages
import { LiveChat, Buy, Alien, Profile, Loading } from "./components";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
// router and layouts
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />

      <Route path="home" element={<HomeLayout />}>
        <Route path="chat" element={<LiveChat />} />
        <Route path="buy" element={<Buy />} />
        <Route path="alien" element={<Alien />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="suse bg-[var(--background)] text-[var(--text1)]">
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
