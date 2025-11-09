import HomeInfo from "@/components/HomeInfo";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
const NewHome = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<Number | null>(0);

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

  console.log('currentStage:', currentStage)

  return (
    <section className="w-full h-screen relative bg-black">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <directionalLight position={[1, 0, 0.3]} intensity={2} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} />
          <hemisphereLight
            groundColor="#000000"
            intensity={1}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          {/* <Sky isRotating={isRotating}/> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default NewHome;
