"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, Stars } from "@react-three/drei";
import { Suspense } from "react";

function AmbulanceModel() {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Main ambulance body */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[4, 2, 2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Cabin */}
        <mesh position={[-2.2, 0.2, 0]} castShadow>
          <boxGeometry args={[1.2, 1.6, 1.8]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
        
        {/* Red cross */}
        <mesh position={[0, 1.01, 0]}>
          <boxGeometry args={[0.8, 0.02, 0.2]} />
          <meshStandardMaterial color="#DC2626" />
        </mesh>
        <mesh position={[0, 1.01, 0]}>
          <boxGeometry args={[0.2, 0.02, 0.8]} />
          <meshStandardMaterial color="#DC2626" />
        </mesh>
        
        {/* Wheels */}
        <mesh position={[-1.5, -1.1, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[1.5, -1.1, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[-1.5, -1.1, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[1.5, -1.1, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Emergency lights */}
        <mesh position={[0, 1.1, 0.8]}>
          <boxGeometry args={[0.3, 0.15, 0.15]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, 1.1, -0.8]}>
          <boxGeometry args={[0.3, 0.15, 0.15]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  );
}

function MedicalElements() {
  return (
    <>
      {/* Floating medical cross */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[4, 2, -2]}>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Floating ring */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-4, 1, 1]}>
          <torusGeometry args={[0.5, 0.05, 16, 32]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Small sphere */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={1.2}>
        <mesh position={[3, -1, 2]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[400px] w-full bg-gradient-to-b from-gray-900 to-deep-navy">
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[6, 3, 6]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#DC2626" />
      <pointLight position={[5, 3, 5]} intensity={0.5} color="#06B6D4" />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={null}>
        <AmbulanceModel />
        <MedicalElements />
      </Suspense>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
    </div>
  );
}
