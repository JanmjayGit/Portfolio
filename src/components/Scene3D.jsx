import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return pointer;
}

function Scene() {
  const group = useRef();
  const pointer = usePointer();

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += (pointer.current.y * 0.25 - group.current.rotation.x * 0.15) * 0.04;
    group.current.rotation.z = pointer.current.x * 0.08;
  });

  return (
    <>
      <color attach="background" args={["#070b14"]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 2]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-4, -2, -3]} intensity={0.7} color="#818cf8" />

      <group ref={group}>
        <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
          <mesh>
            <icosahedronGeometry args={[1.55, 1]} />
            <meshStandardMaterial
              color="#22d3ee"
              wireframe
              transparent
              opacity={0.85}
              emissive="#0e7490"
              emissiveIntensity={0.4}
            />
          </mesh>
          <mesh scale={0.72}>
            <icosahedronGeometry args={[1.55, 0]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.35}
              roughness={0.25}
              emissive="#1e1b4b"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      </group>

      <Sparkles count={70} scale={7} size={2.2} speed={0.35} color="#67e8f9" opacity={0.65} />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: false }}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      style={{ pointerEvents: "none", width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
