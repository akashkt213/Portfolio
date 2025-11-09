import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import foxScene from "../assets/Fox.glb";

function Fox() {
  const foxRef = useRef();
  const { scene, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, foxRef);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    // play walking animation
    actions["Walk"]?.play();
  }, [actions]);

  useFrame((_, delta) => {
    const fox = foxRef.current;
    if (!fox) return;

    // Move fox left or right
    fox.position.x += direction * delta * 1; // adjust speed as needed

    // Turn fox when reaching certain limits
    if (fox.position.x > 3) {
      setDirection(-1);
      fox.rotation.y = Math.PI; // face left
    } else if (fox.position.x < -3) {
      setDirection(1);
      fox.rotation.y = 0; // face right
    }
  });

  return (
    <primitive
      ref={foxRef}
      object={scene}
      position={[-0.5, -3, -0.6]}
      scale={[0.03, 0.04, 0.04]}
    />
  );
}

export default Fox;
