import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Fleet from "../components/Fleet";
import Advantages from "../components/Advantages";
import ServiciosAereos from "../components/ServiciosAereos";
import GlobalReach from "../components/GlobalReach";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Fleet />
      <Advantages />
      <ServiciosAereos />
      <GlobalReach />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
