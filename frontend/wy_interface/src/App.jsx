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
  Dashboard,
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

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = usePersistedState("userProfile", null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />

      <Route path="home" element={<HomeLayout />}>
        {/* component to give some stats/options */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* Chat Components */}
        <Route path="chatselect" element={<ChatSelection />} />
        <Route path="chat" location={location} element={<LiveChat />} />
        {/* Other Components */}
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
      <div className="suse bg-base-200">
        <ProfileProvider>
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </ProfileProvider>
      </div>
    </>
  );
}

export default App;
