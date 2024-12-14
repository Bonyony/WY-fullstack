import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";

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

const Bunny = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF("/models/Rabbit.glb");
  console.log(nodes, materials);
  return (
    <>
      <mesh
        geometry={nodes?.Geo_Rabbit?.geometry}
        material={materials?.lambert2SG}
        scale={0.05}
        position={position}
        rotation={rotation}
      />
      {/* <EffectComposer>
        <Glitch
          delay={[1.5, 3.5]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.3, 1.0]} // min and max glitch strength
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.85}
        />
      </EffectComposer> */}
    </>
  );
};

const FlyingSaucer = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF("/models/Flying saucer.glb");
  console.log(nodes, materials);
  return (
    <mesh
      geometry={nodes?.Flying_Saucer?.geometry}
      material={materials?.Mat}
      scale={0.2}
      position={position}
      rotation={rotation}
    />
  );
};

const AlienModels = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 20, 50], fov: 50 }}
      style={{ height: "100vh", width: "100%" }}
    >
      <directionalLight position={[10, 30, 5]} intensity={1.2} />
      {/* <directionalLight position={[-7, 12, 4]} intensity={1} color={"blue"} /> */}

      {/* Spotlight */}
      <spotLight
        position={[-7, 12, 4]} // Light source position
        angle={7} // Spotlight cone angle
        penumbra={8} // Soft edges
        intensity={5} // Brightness
        castShadow
        color={"lightgreen"}
        decay={0}
        shadow-mapSize={[1024, 1024]} // Shadow resolution
        // target={new THREE.Object3D().position.set(7, 0, 0)} // Focus on GreyAlien
      />

      <ambientLight intensity={0.7} />
      <OrbitControls enableZoom={false} makeDefault={true} />
      {/* <Environment preset="sunset" background /> */}
      <GreyAlien position={[7, 0, 0]} />
      <FlyingSaucer
        position={[-7, 12, 4]}
        rotation={[Math.PI / 8, 0, Math.PI / 8]}
      />
      {/* y value of 1.5 will make Bunny even with the other models */}
      <Bunny position={[-4, 8.5, 3]} rotation={[Math.PI / 8, 0, Math.PI / 8]} />

      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      <EffectComposer>
        {/* <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  );
};

export default AlienModels;
