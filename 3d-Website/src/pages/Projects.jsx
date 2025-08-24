import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RobotModel() {
  const { scene } = useGLTF(
    "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb"
  );

  return <primitive  object={scene} scale={1.3} position={[0, -1, 0]} />;
}

const cards = [
  { title: "Social Media App", desc: "Postify is a dynamic and responsive social media application developed from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js).", link: "https://x-media-muthassir.netlify.app/" },
  { title: "To-Do List ", desc: "Node.js + Socket.io + MongoDB + JWT sessions.", link: "https://todo-muthassir.netlify.app/" },
  { title: "Tesla Clone", desc: "Developed a visually accurate and highly responsive clone of the Tesla website's front-end using React and Tailwind css." , link: "https://teslaclonemuthassir.netlify.app/"},
  { title: "AI Chat ", desc: "Developed a robust, real-time AI chat application leveraging the MERN stack", link: "https://tesseract-ai-muthassir.netlify.app/" },

];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="h-[50vh] sm:h-[65vh] rounded-xl overflow-hidden mt-8">
          <Canvas camera={{ position: [12, 1, 6], fov: 55 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[2, 3, 2]} intensity={1} />
            <Suspense fallback={null}>
              <RobotModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 p-4 hover:border-white/30 transition">
                <div className="text-lg font-semibold">{c.title}</div>
                <p className="text-white/80 text-sm mt-2">{c.desc}</p>
                <button className="mt-4 text-sm px-3 py-1.5 rounded bg-indigo-500/90 hover:bg-indigo-400 font-semibold">
                  <a href={c.link} target="__blank">View Project</a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
