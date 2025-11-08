import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import islandScene from "../assets/Island.glb";
import { a } from "@react-spring/three";

const Island = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group
            name="7320dfbf80e845cda20e23013c57d63afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.M_Tree}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.M_Trimsheet}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.M_Architecture}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.M_Deco}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.M_Treehouse}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.M_leaves}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.M_Details}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <group
                      name="Object_10"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Plane"
                  position={[197.205, 0, -303.263]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[4240.626, 4240.626, 115.34]}
                >
                  <mesh
                    name="Plane_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Tree_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};
export default Island;
