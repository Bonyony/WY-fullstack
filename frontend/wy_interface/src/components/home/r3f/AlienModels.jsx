import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const GreyAlien = () => {
  const { nodes, materials } = useGLTF("/models/Alien.glb");
  console.log(nodes, materials);
  return (
    <>
      <mesh
        geometry={nodes?.Alien_mesh?.geometry}
        material={materials?.lambert2SG}
      />
    </>
  );
};

const AlienModels = () => {
  return (
    <Canvas camera={{ position: [0, 22, 29] }}>
      <Suspense>
        <directionalLight position={[2, 10, 2]} intensity={0.8} />
        <ambientLight intensity={0.7} />
        {/* <Environment preset="sunset" background /> */}
        <GreyAlien />
      </Suspense>
    </Canvas>
  );
};

export default AlienModels;
