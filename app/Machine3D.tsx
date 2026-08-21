"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";

function PrinterBody() {
  return (
    <group>
      {/* Main printer body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 1.8, 2]} />
        <meshStandardMaterial
          color="#151922"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* Top section */}
      <mesh position={[0, 1.15, 0]}>
        <boxGeometry args={[4.6, 0.35, 1.7]} />
        <meshStandardMaterial
          color="#252b36"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Cyan front panel */}
      <mesh position={[0, 0.05, 1.03]}>
        <boxGeometry args={[4.2, 1.2, 0.08]} />
        <meshStandardMaterial
          color="#20d9ff"
          emissive="#063d4a"
          emissiveIntensity={1.5}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>

      {/* Print carriage */}
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[1.3, 0.25, 1.4]} />
        <meshStandardMaterial
          color="#0b0e14"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Legs */}
      {[
        [-2, -1.4, -0.7],
        [2, -1.4, -0.7],
        [-2, -1.4, 0.7],
        [2, -1.4, 0.7],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <boxGeometry args={[0.25, 1.2, 0.25]} />
          <meshStandardMaterial
            color="#303744"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Machine3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "520px",
        background:
          "radial-gradient(circle at center, #101c2a 0%, #030507 65%, #000000 100%)",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [7, 4.5, 7], fov: 42 }}>
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={3}
        />

        <pointLight
          position={[-4, 2, 4]}
          color="#00d9ff"
          intensity={20}
        />

        <pointLight
          position={[4, 1, -3]}
          color="#ff3b9d"
          intensity={15}
        />

        <Float
          speed={1.2}
          rotationIntensity={0.15}
          floatIntensity={0.2}
        >
          <PrinterBody />
        </Float>

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}