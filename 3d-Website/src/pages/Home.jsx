import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Helmet() {
  const { scene } = useGLTF(
    "https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"
  );


  return <primitive  object={scene} scale={1.2} position={[0, -0.3, 0]} />;
}

useGLTF.preload(
  "https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"
);

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-indigo-400 glitch" data-text="Mohamed Mudassir">
              Mohamed Mudassir
            </span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/80">
            Fullstack Developer — I build fast, modern and interactive web apps.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start text-3xl shadow rounded ">
            <a
              href="https://github.com/muthassir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-black 
               transition bg-[#0ff] hover:bg-indigo-400 shadow p-2 rounded"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mudassir-16028a255/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-black  transition bg-[#0ff] hover:bg-indigo-400 shadow p-2 rounded"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919080058886"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-black transition bg-[#0ff] hover:bg-indigo-400 shadow p-2 rounded"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="h-[50vh] sm:h-[60vh] rounded-xl overflow-hidden">
          <Canvas camera={{ position: [0, 0.5, 4], fov: 55 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[2, 3, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Helmet />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
