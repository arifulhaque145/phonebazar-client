import HeroSection from "../components/home/HeroSection";
import Newsletter from "../components/home/Newsletter";
import PopularPhones from "../components/home/PopularPhones";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <div>
      <HeroSection />
      <PopularPhones />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;
