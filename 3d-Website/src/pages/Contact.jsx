import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BoomBox() {
  const { scene } = useGLTF(
    "https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb"
  );
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; 
      ref.current.rotation.x += 0.001; 
    }
  });

  return <primitive ref={ref} object={scene} scale={300} position={[0, -1.2, 0]} />;
}

useGLTF.preload(
  "https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb"
);

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-2 gap-10 items-center">
      <div className="h-[40vh] sm:h-[55vh] rounded-xl overflow-hidden order-2 lg:order-1">
        <Canvas camera={{ position: [12, 1, 6], fov: 55 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[2, 3, 2]} intensity={1} />
          <Suspense fallback={null}>
            <BoomBox />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="order-1 lg:order-2">
        <h2 className="text-2xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-3 text-white/80">
          Reach out to collaborate or hire me.
        </p>
       <form
  className="mt-6 grid gap-3"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements[0].value.trim();
    const email = form.elements[1].value.trim();
    const message = form.elements[2].value.trim();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.ok) {
        alert("Message sent. Thank you!");
        form.reset();
      } else {
        alert(data.error || "Failed to send");
      }
    } catch (err) {
      alert("Network error");
    }
  }}
>
  <input className="bg-white/5 border border-white/10 rounded px-3 py-2" placeholder="Your name" />
  <input className="bg-white/5 border border-white/10 rounded px-3 py-2" placeholder="Your email" />
  <textarea rows="4" className="bg-white/5 border border-white/10 rounded px-3 py-2" placeholder="Message" />
  <button type="submit" className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-400 font-semibold w-full cursor-pointer">
    Send
  </button>
</form>
        <div className="mt-4 text-sm text-white/70 text-center">
        <p>OR</p>
         email: <a className="underline" href="mailto:muthaseir@gmail.com">muthaseir@gmail.com</a>
        </div>
      </div>
    </main>
  );
}
