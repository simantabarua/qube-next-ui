import Banner from "./components/Banner";
import ClientExperience from "./components/ClientExperience";
import NewsLatter from "./components/NewsLatter";
import Services from "./components/Services";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="home min-h-screen h-full ">
      <Banner />
      <ClientExperience />
      <Services />
      <Team />
      <Testimonial />
      <NewsLatter />
    </main>
  );
}
