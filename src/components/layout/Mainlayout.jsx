import React from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <Sidebar />

      
      <main className="ml-64 w-full p-6">
        {children}
      </main>
    </div>
  );
}