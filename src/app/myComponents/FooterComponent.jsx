'use client'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function FooterComponent() {
    return (<>
        <footer className="bg-gray-900 text-white pt-8 self-end justify-self-end">
            <div className="container mx-auto px-4 pb-5">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Club de Fútbol Sala</h3>
                        <p>Fomentando el deporte y los valores desde 1990</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400"><Facebook /></a>
                        <a href="#" className="hover:text-blue-400"><Instagram /></a>
                        <a href="#" className="hover:text-blue-400"><Twitter /></a>
                    </div>
                </div>
            </div>
            {/* <p className='bg-primary text-primary-foreground py-4 text-center'>&copy; 2023 Club de Fútbol Sala Estrella. Todos los derechos reservados.</p> */}
        </footer>
    </>
    )
}
