import { Canvas } from '@react-three/fiber';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1000], fov: 45 }}>
          <Background />
        </Canvas>
      </div>
      <div className="relative">
        <Hero />
        <Profile />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;