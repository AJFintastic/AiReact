import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import DataViz from '../components/DataViz';

function Home() {
  return (
    <main className="home-page">
      <HeroSection />

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          At Fintastic Data, we specialize in delivering innovative solutions
          that harness the power of Artificial Intelligence, Data Science,
          and Automation to drive business growth. Our team of experts is
          dedicated to transforming complex data into strategic assets,
          enabling organizations to make informed decisions and achieve
          their objectives.
        </p>
      </section>

      <Services />

      {/* Include the DataViz component here */}
      <DataViz />
    </main>
  );
}

export default Home;
