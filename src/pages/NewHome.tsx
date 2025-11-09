import Island from "@/models/Island";
import Sky from "@/models/Sky";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
const NewHome = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative bg-black">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <directionalLight position={[1, 0, 0]} intensity={2} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} />
          <hemisphereLight
            // skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Sky />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default NewHome;
