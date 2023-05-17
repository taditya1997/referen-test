import React from "react";

export default function Navbar() {
  return (
    <nav data-testid="navbar">
      <div className="container mx-auto flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">Rick and Morty</h1>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            data-testid="navbar-home"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            data-testid="navbar-about"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
