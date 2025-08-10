"use client";
import Head from 'next/head';
import Header from '../components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import ChatWindow from '@/components/chats/ChatWindow';
import { useState } from 'react';


export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Team starter project" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 relative">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-0 left-0 z-10 p-2 bg-gray-200 text-black rounded shadow hover:bg-gray-300"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <ChatWindow />
      </main>
    </div>
  );
}
