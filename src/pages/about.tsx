import React from 'react';

import AboutUsPage from '@/components/AboutUsPage'; // Adjust path if needed
import Footer from '@/components/landing/Footer';
import NavBar from '@/components/navbar/NavBar';

const About = () => {
  return (
    <>
      <NavBar />
      <main>
        <AboutUsPage />
      </main>
      <Footer />
    </>
  );
};

export default About;
