import CourseHighlights from '@/components/landing/CourseHighlights';
import CoursesForKids from '@/components/landing/CoursesForKids';
import FeaturedTutors from '@/components/landing/FeaturedTutors';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import OurImpact from '@/components/landing/OurImpact';
import OurOfferings from '@/components/landing/OurOfferings';
import TutorCTA from '@/components/landing/TutorCTA';
import NavBar from '@/components/navbar/NavBar';

// This data will eventually come from a CMS or your backend API
const heroData = {
  title: 'Join Live Online or Offline Classes with the Best Tutors',
  subtitle:
    'Trusted by 1000+ parents. Safe, verified tutors. Easy demo booking.',
  ctaText: 'Book a Free Demo',
  imageUrl: '/images/heroImage.png',
};

const LandingPage = () => {
  return (
    // Using a React Fragment <>...</> to group elements
    <>
      <NavBar />
      <main>
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          ctaText={heroData.ctaText}
          imageUrl={heroData.imageUrl}
        />
        <CourseHighlights />
        <OurOfferings />
        <CoursesForKids />
        <FeaturedTutors />
        <HowItWorks />
        <TutorCTA />
        <OurImpact />
        <Footer />
        {/* The Trust Badges section would go here. It should be its own component! */}
      </main>
      {/* <Footer /> component would go here */}
    </>
  );
};

export default LandingPage;
