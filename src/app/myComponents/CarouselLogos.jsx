import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SponsorLogos() {
  const [logos, setLogos] = useState([
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=80&width=150',
    '/placeholder.svg?height=120&width=180',
    '/placeholder.svg?height=90&width=220',
    '/placeholder.svg?height=110&width=190',
    '/placeholder.svg?height=100&width=200',
  ])

  useEffect(() => {
    // Duplicar los logos para crear el efecto infinito
    setLogos(prevLogos => [...prevLogos, ...prevLogos])
  }, [])

  return (
    <div className="w-full md:w-5/6 self-center overflow-hidden py-2 mt-10 rounded-xl  bg-gray-800 border-white border-2">
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex h-12 w-20 md:h-24 md:w-36 items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  // src={index % 2 == 0 ? '/belligod.png' : '/carva.jpg'} 
                  src={'/MARCOPACK BLANCO.png'}
                  alt={`Sponsor logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex h-12 w-20 md:h-24 md:w-36 items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  // src={index % 2 == 0 ? '/belligod.png' : '/carva.jpg'} 
                  src={'/MARCOPACK BLANCO.png'}
                  alt={`Sponsor logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}