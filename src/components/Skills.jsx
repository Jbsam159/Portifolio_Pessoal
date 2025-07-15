import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Tecnologias que utilizo</h2>
      <div className="flex flex-wrap justify-center gap-8 text-4xl text-gray-600">
        <i className="fa-brands fa-html5 hover:text-orange-400" title="HTML"></i>
        <i className="fa-brands fa-css hover:text-blue-600" title="CSS"></i>
        <i className="fab fa-js-square hover:text-yellow-300" title="JavaScript"></i>
        <i className="fab fa-react hover:text-blue-400" title="React"></i>
        <i className="fab fa-node-js hover:text-green-500" title="Node.js"></i>
        <i className="devicon-typescript-plain hover:text-blue-500" title="Typescript"></i>
        <i className="devicon-tailwindcss-original hover:text-blue-500" title="Tailwind"></i>
        <i class="devicon-vite-original hover:text-blue-500" title="Vite"></i>      
        <i className="devicon-mysql-original hover:text-blue-500" title="MySQL"></i>
        <i className="devicon-mongodb-plain hover:text-green-500" title="MongoDB"></i>
        <i className="fab fa-python hover:text-blue-500" title="Python"></i>        
        <i className="devicon-git-plain hover:text-orange-500" title='Git'></i>
        <i className="devicon-github-original hover:text-blue-500" title='Github'></i>                    
        <i className="fas fa-chart-bar hover:text-indigo-500" title="Power BI"></i>
      </div>
    </section>
  )
}