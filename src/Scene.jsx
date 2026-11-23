
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function Sculpture() {
  const object = useRef();

  useFrame((state, delta) => {
    if (object.current) {
      object.current.rotation.y += delta * 0.2;
      object.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <group ref={object}>
      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={0.4}
      >
        <mesh>
          <torusKnotGeometry args={[1, 0.28, 220, 32]} />
          <meshPhysicalMaterial
            color="#a8ed68"
            metalness={0.85}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      <mesh rotation={[1.2, 0.4, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 160]} />
        <meshBasicMaterial
          color="#d7ffb3"
          transparent
          opacity={0.65}
        />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "460px" }}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 5]} intensity={3} />
        <pointLight position={[-3, -2, 2]} color="#a8ed68" intensity={15} />

        <Sculpture />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
