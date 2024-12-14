import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const GreyAlien = ({ position }) => {
  const { nodes, materials } = useGLTF("/models/Alien.glb");
  console.log(nodes, materials);
  return (
    <>
      <mesh
        geometry={nodes?.Alien_mesh?.geometry}
        material={materials?.lambert2SG}
        position={position}
      />
    </>
  );
};

const Bunny = ({ position }) => {
  const { nodes, materials } = useGLTF("/models/Rabbit.glb");
  console.log(nodes, materials);
  return (
    <>
      <mesh
        geometry={nodes?.Geo_Rabbit?.geometry}
        material={materials?.lambert2SG}
        scale={0.05}
        position={position}
      />
    </>
  );
};

const FlyingSaucer = ({ position }) => {
  const { nodes, materials } = useGLTF("/models/Flying saucer.glb");
  console.log(nodes, materials);
  return (
    <mesh
      geometry={nodes?.Flying_Saucer?.geometry}
      material={materials?.Mat}
      scale={0.2}
      position={position}
    />
  );
};

const AlienModels = () => {
  return (
    <Canvas camera={{ position: [0, 22, 29] }}>
      <Suspense>
        <directionalLight position={[2, 10, 2]} intensity={0.8} />
        <ambientLight intensity={0.7} />
        <OrbitControls enableZoom={false} makeDefault={true} />
        {/* <Environment preset="sunset" background /> */}
        <GreyAlien position={[7, 0, 0]} />
        <FlyingSaucer position={[-7, 0, 0]} />
        {/* y value of 1.5 will make Bunny even with the other models */}
        <Bunny position={[0, 1.5, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default AlienModels;
