import { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MouseTracker = () => {
  const [mouse, setMouse] = useState(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event) => {
      // change these to have differnt values?
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize X
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize Y
      setMouse(new THREE.Vector2(x, y));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouse;
};
export default MouseTracker;
