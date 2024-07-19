import Header from '@/components/header';
import React from 'react';
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 antialiased">
      <Header />
      <main className="container">
        <div className="max-h-screen flex flex-1 flex-col py-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
