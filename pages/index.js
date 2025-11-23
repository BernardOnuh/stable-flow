// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-white text-white min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}