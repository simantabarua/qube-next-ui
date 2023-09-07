import { Banner } from "./components/Banner";
import ClientExperience from "./components/ClientExperience";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import NewsLatter from "./components/NewsLatter";
import Services from "./components/Services";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="home h-screen ">
      <div>
        <Navbar />
        <Banner />
        <ClientExperience />
        <Services />
        <Team />
        <Testimonial />
        <NewsLatter />
        <Footer />
      </div>
    </main>
  );
}
