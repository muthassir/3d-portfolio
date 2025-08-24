import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TorusKnot() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003; 
      meshRef.current.rotation.x += 0.001; 
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.7, 0.25, 128, 32]} />
      <meshStandardMaterial color="#10b981" roughness={0.3} metalness={0.6} />
    </mesh>
  );
}

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-2 gap-10 items-center">
      <div className="order-2 lg:order-1">
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.

Iam Familiar with HTML, CSS3, Tailwind, Javascript, React.js ,Next.js, Three.js, Node.js, Express.js, MongoDB, Mongoose


        </p>
      </div>

      <div className="order-1 lg:order-2 h-[40vh] sm:h-[55vh] rounded-xl overflow-hidden">
        <Canvas camera={{ position: [0, 0.3, 3], fov: 55 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[2, 3, 2]} intensity={1} />
          <Suspense fallback={null}>
            <TorusKnot />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </main>
  );
}
