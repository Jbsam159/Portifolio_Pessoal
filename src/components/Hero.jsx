import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold">João Vitor</h1>
      <p className="text-xl mt-4">Desenvolvedor | Analista de Dados</p>
      <p className="mt-2 max-w-xl text-gray-600">
        Apaixonado por transformar dados em decisões e criar soluções eficientes com tecnologia.
      </p>
    </section>
  )
}