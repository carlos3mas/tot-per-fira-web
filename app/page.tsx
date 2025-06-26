import Hero from './components/sections/Hero';
import Productos from './components/sections/Productos';
import ZonaCobertura from './components/sections/ZonaCobertura';
import Resenas from './components/sections/Resenas';
import Contacto from './components/sections/Contacto';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Productos />
      <ZonaCobertura />
      <Resenas />
      <Contacto />
    </main>
  );
}
