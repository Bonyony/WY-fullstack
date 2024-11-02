import React, { Suspense, createContext, useState } from "react";
import "./App.css";
import "./components/hooks/usePersistedState";
// components and pages
import {
  LiveChat,
  ChatSelection,
  Buy,
  Alien,
  Profile,
  Loading,
} from "./components";
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
import usePersistedState from "./components/hooks/usePersistedState";

export const ProfileContext = createContext({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />

      <Route path="home" element={<HomeLayout />}>
        <Route path="chatselect" element={<ChatSelection />} />
        <Route path="chat" location={location} element={<LiveChat />} />

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

function App({ location }) {
  const [profile, setProfile] = usePersistedState(null);

  return (
    <>
      <div className="suse bg-[var(--background)] text-[var(--text1)]">
        <ProfileContext.Provider value={{ profile, setProfile }}>
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </ProfileContext.Provider>
      </div>
    </>
  );
}

export default App;
