import { useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react'

export default function Header() {
  const [theme, setTheme] = useState('sun');

  function handleTheme() {
    if(theme == 'sun') {
      setTheme('moon');
    } else {
      setTheme('sun');
    }
  }

  return (
    <div className="bg-black flex justify-between p-4 mx-auto items-center">
      <p className="text-2xl font-bold text-white">Bryan Ruelas</p>
      <nav className='text-white hidden md:flex space-x-4'>
        <a href="" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2'>Inicio</a>
        <a href="" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2'>Habilidades</a>
        <a href="" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2'>Proyectos</a>
        <a href="" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2'>Contacto</a>
      </nav>
      <button onClick={handleTheme} className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground h-10 w-10 bg-gray-800 text-white hover:bg-gray-700'>{theme == 'sun' ? <SunIcon color='#fff'/> : <MoonIcon color='#fff'/>}</button>
    </div>
  )
}

