// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-8">
        <UserList />
      </main>
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Desarrollado con React, Vite y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;