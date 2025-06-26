import ProductosHero from './components/ProductosHero';
import AltavocesSection from './components/AltavocesSection';
import CongeladoresSection from './components/CongeladoresSection';
import GrifosBarrilesSection from './components/GrifosBarrilesSection';
import BebidasSection from './components/BebidasSection';

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProductosHero />
      <AltavocesSection />
      <CongeladoresSection />
      <GrifosBarrilesSection />
      <BebidasSection />
    </main>
  );
} 