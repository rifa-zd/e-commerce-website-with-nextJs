"use client"

import { ReactNode } from "react";
import AppContextProvider from "../Context/appContext";
import Navbar from "../navbar";

export default function Provider({ children }: { children: ReactNode }) {
  return (
  <AppContextProvider>
    {/* each componenet will be rendered inside here
    now for each component we can access context */}
    <Navbar />
    {children} 
    </AppContextProvider>)
}
