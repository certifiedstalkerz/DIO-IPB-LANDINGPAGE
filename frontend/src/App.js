import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { ExperienceAndOrganizations } from "@/components/ExperienceAndOrganizations";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const Home = () => {
  return (
    <div className="bg-[#0B1020]">
      <Hero />
      <About />
      <Education />
      <Projects />
      <ExperienceAndOrganizations />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
