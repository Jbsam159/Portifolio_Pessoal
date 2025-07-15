import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">João Vitor</h1>
        <div className="space-x-4">
          <a href="#about" className="text-gray-600 hover:text-black">Sobre</a>
          <a href="#projects" className="text-gray-600 hover:text-black">Projetos</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contato</a>
        </div>
      </div>
    </nav>
  )
}