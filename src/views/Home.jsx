import {
  AboutUs,
  Contact,
  Hero,
  OurServices,
  Value,
} from "../containers/home/";

function Home() {
  return (
    <main id="home" aria-label="Home Page">
      <Hero />
      <AboutUs />
      <Value />
      <OurServices />
      <Contact />
    </main>
  );
}

export default Home;
