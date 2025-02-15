import Intro from '../components/home/Intro.jsx';
import About from '../components/home/About.jsx';
import Skills from '../components/home/Skills.jsx';
import Projects from '../components/home/Projects.jsx';
import Publications from '../components/home/Publications.jsx';

export default function Home() {
  return (
    <>
      <Intro />

      <About />
      <Skills />
      <Projects />
      <Publications />
    </>
  );
}
