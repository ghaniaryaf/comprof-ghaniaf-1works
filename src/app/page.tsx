import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import ServicesPreview from './components/ServicesPreview';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}