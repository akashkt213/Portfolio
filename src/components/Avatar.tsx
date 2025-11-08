import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function AvatarModel() {
  const { scene } = useGLTF("/models/somerobot.glb");
  return <primitive object={scene} scale={0.3} position={[0, 0, 0]} />;
}

export function ThreeAvatar() {
  return (
    <div className="w-full h-[200px] flex justify-end">
      <Canvas camera={{ position: [2, 0, 0], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
