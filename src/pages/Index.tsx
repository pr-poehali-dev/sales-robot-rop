import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import InfoSections from '@/components/landing/InfoSections';
import ContactForm from '@/components/landing/ContactForm';

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={scrollToContact} />
      <HeroSection onContactClick={scrollToContact} />
      <InfoSections />
      <ContactForm scrollToContact={scrollToContact} />
    </div>
  );
};

export default Index;
