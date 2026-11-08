import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chaklo Cafe | Great Food, Great Vibes",
  description:
    "Discover Chaklo Cafe, explore our menu, and find your next favourite food.",
};

export default function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />
        <FeaturedMenu />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}