'use client'
// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import uwu from '../../../public/wicho.jpeg'
export default function Home() {
  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: "Producto 1",
      description: "Incididunt sint do ut voluptate veniam laboris cupidatat esse anim cillum. Est commodo enim elit.",
      image: uwu,

    },
    {
      id: 2,
      name: "Producto 2",
      description: "Exercitation officia veniam cupidatat. Reprehenderit enim commodo culpa dolor id nisi excepteur anim magna consectetur nostrud amet in laborum excepteur. Eu ut sint eu consequat quis. Pariatur nisi voluptate esse exercitation aute consequat dolore. Consequat eu ut magna Lorem dolor adipisicing aliqua labore do voluptate veniam excepteur aliquip.",
      image: uwu,
     
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Exercitation officia veniam cupidatat. Reprehenderit enim commodo culpa dolor id nisi excepteur anim magna consectetur nostrud amet in laborum excepteur. Eu ut sint eu consequat quis. Pariatur nisi voluptate esse exercitation aute consequat dolore. Consequat eu ut magna Lorem dolor adipisicing aliqua labore do voluptate veniam excepteur aliquip.",
      image: uwu,
      
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Exercitation officia veniam cupidatat. Reprehenderit enim commodo culpa dolor id nisi excepteur anim magna consectetur nostrud amet in laborum excepteur. Eu ut sint eu consequat quis. Pariatur nisi voluptate esse exercitation aute consequat dolore. Consequat eu ut magna Lorem dolor adipisicing aliqua labore do voluptate veniam excepteur aliquip.",
      image: uwu,
     
    }
  ]);

  return (
    <div className="min-h-screen">
        <div  className='p-4 flex justify-center items-center'>
            <h1 className="text-3xl font-semibold ">Productos</h1>
        </div>
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-24 my-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
                <p className="text-lg mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}2