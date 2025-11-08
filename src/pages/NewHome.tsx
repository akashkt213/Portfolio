import Island from "@/models/Island";
import { Canvas } from "@react-three/fiber";
const NewHome = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenPosition, screenScale];
  };
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <ambientLight />
        <directionalLight position={[10, 10, 5]} />
        <Island /> {/* ✅ 3D components must be inside Canvas */}
      </Canvas>
    </section>
  );
};

export default NewHome;
