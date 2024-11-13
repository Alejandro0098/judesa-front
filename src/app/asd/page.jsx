'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Separator = () => (
  <motion.div
    className="flex items-center justify-center my-12"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="h-0.5 bg-red-600 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: "30%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
    <motion.div
      className="mx-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="w-6 h-6 bg-gray-800 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
    </motion.div>
    <motion.div
      className="h-0.5 bg-red-600 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: "30%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </motion.div>
)

export default function Category({ name, teamPhoto, description }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-8 text-center relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {name}
          </span>
        </motion.h1>

        <Separator />

        <motion.div
          className="relative w-full h-[60vh] mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={teamPhoto}
            alt={`Equipo de ${name}`}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>

        <Separator />

        <motion.p
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nuestros Proyectos
          </motion.button>
          <motion.button
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}