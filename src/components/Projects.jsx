import React from 'react'
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Projetos</h2>
      <div className="bg-white rounded-lg mx-auto shadow-md p-6 max-w-lg text-justify">
        <h3 className="text-xl font-bold mb-2 text-center">Sistema para Distribuidora</h3>
        <p className="text-gray-700 mb-4">
          Aplicação full-stack desenvolvida para agilizar e intermediar os pedidos feitos pelos clientes,
          tirando a necessidade da empresa realizar ligações, diminuindo custo operacional e esforço em 50% e trazendo independência.
        </p>
        <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
          <li>Frontend: React + Tailwind CSS</li>
          <li>Backend: Node.js + Express</li>
          <li>Banco de Dados: MongoDB</li>
          <li>API Rest</li>
        </ul>
        <div className="flex gap-4">
          <a
            href="https://github.com/Jbsam159/projeto_sampaio_ecommerce_backend"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Reposotório Back-end
          </a>
          <a
            href="https://github.com/Jbsam159/projeto_sampaio_ecommerce_frontend"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Reposotório Front-end
          </a>
          <a
            href="https://sampaio-distribuidora.vercel.app/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </section>
    
  )
}