"use client";

import React, { useRef, useSyncExternalStore, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Individual floating geometry with gentle rotation and responsive pointer tilt
function FloatingGeometry({
  position,
  rotationSpeed = 0.5,
  color = "#38bdf8",
  geometryType = "icosahedron",
  scale = 1,
  wireframe = false,
}: {
  position: [number, number, number];
  rotationSpeed?: number;
  color?: string;
  geometryType?: "icosahedron" | "octahedron" | "torus" | "dodecahedron" | "ring";
  scale?: number;
  wireframe?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * rotationSpeed * 0.35;
    meshRef.current.rotation.y += delta * rotationSpeed * 0.5;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.8}
      floatIntensity={1.2}
      floatingRange={[-0.12, 0.12]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometryType === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometryType === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometryType === "torus" && <torusGeometry args={[0.95, 0.2, 16, 32]} />}
        {geometryType === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
        {geometryType === "ring" && <ringGeometry args={[1.2, 1.25, 64]} />}

        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.85}
          wireframe={wireframe}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Glowing Orbit Rings that react to mouse pointer
function OrbitRings() {
  const ringRef1 = useRef<THREE.Mesh>(null!);
  const ringRef2 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.15;
      ringRef1.current.rotation.y += delta * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * 0.18;
      ringRef2.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group position={[2.2, 0.2, -0.5]}>
      {/* Outer Cyan Orbit Ring */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
          roughness={0.2}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Violet Orbit Ring */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.8, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.65}
          roughness={0.2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

// Particle field with gentle drift
function AmbientParticles({ count = 45 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.sin(i * 12.9898) * 7;
      positions[i * 3 + 1] = Math.sin(i * 78.233) * 5;
      positions[i * 3 + 2] = Math.sin(i * 37.719) * 3;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.025;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#38bdf8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Interactive Scene with mouse parallax
function SceneContent() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Smooth lerp following mouse pointer
    const targetX = (state.pointer.x * 0.4);
    const targetY = (state.pointer.y * 0.3);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 5, 5]} intensity={1.8} color="#38bdf8" />
      <pointLight position={[-4, -3, -2]} intensity={2.8} color="#8b5cf6" />
      <pointLight position={[3, 2, 2]} intensity={2.0} color="#00d2ff" />

      {/* Orbit Rings around hero visual side */}
      <OrbitRings />

      {/* Main hero geometric cluster */}
      <FloatingGeometry
        position={[2.2, 0.3, 0]}
        scale={1.1}
        geometryType="icosahedron"
        color="#38bdf8"
        rotationSpeed={0.7}
        wireframe={false}
      />
      <FloatingGeometry
        position={[2.2, 0.3, 0]}
        scale={1.4}
        geometryType="icosahedron"
        color="#818cf8"
        rotationSpeed={0.4}
        wireframe={true}
      />

      {/* Ambient background accents */}
      <FloatingGeometry
        position={[-3.2, 2.0, -1.8]}
        scale={0.6}
        geometryType="torus"
        color="#a855f7"
        rotationSpeed={0.5}
      />
      <FloatingGeometry
        position={[3.5, -2.0, -1.2]}
        scale={0.55}
        geometryType="octahedron"
        color="#00d2ff"
        rotationSpeed={0.6}
      />
      <FloatingGeometry
        position={[-3.4, -1.8, -2.2]}
        scale={0.65}
        geometryType="dodecahedron"
        color="#6366f1"
        rotationSpeed={0.45}
        wireframe={true}
      />

      <AmbientParticles count={50} />
    </group>
  );
}

// Safe WebGL detection helper
function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function subscribeToMotionPreference(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function isSceneAvailable() {
  return (
    typeof window !== "undefined" &&
    isWebGLAvailable() &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Sleek CSS fallback when WebGL is unavailable or reduced-motion is requested
function FallbackGlowScene() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-purple-500/20 blur-3xl" />
      <div className="relative w-44 h-44 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md transform rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.2)]">
        <div className="w-32 h-32 rounded-xl border border-purple-500/30 bg-purple-950/20 transform -rotate-6" />
      </div>
    </div>
  );
}

export default function Hero3DScene() {
  const sceneAvailable = useSyncExternalStore(
    subscribeToMotionPreference,
    isSceneAvailable,
    () => false,
  );

  if (!sceneAvailable) {
    return <FallbackGlowScene />;
  }

  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
