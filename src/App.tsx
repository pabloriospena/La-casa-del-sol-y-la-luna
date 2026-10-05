/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Alimentacion from './components/Alimentacion';
import Metodologia from './components/Metodologia';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Pillars />
        <Services />
        <Alimentacion />
        <Metodologia />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
