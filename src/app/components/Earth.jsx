'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Earth component with texture
function Earth() {
  const earthRef = useRef();
  const texture = useTexture('/images/Earth.jpg'); // Path to the earth texture

  useFrame(() => {
    earthRef.current.rotation.y += 0.002; // Rotate the Earth
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// Falling star animation
function FallingStar() {
  const starRef = useRef();
  const [position, setPosition] = useState([Math.random() * 10 - 5, 5, -5]); // Random x position at the top
  const [velocity] = useState([Math.random() * 0.1, -0.05, 0]); // Random velocity for falling

  useFrame(() => {
    const [x, y, z] = position;
    const [vx, vy, vz] = velocity;
    const newPosition = [x + vx, y + vy, z + vz];

    // Check if the star is out of the visible area and reset it at the top
    if (y < -5) {
      setPosition([Math.random() * 10 - 5, 5, -5]); // Reset to the top with a new random x position
    } else {
      setPosition(newPosition);
    }

    // Set the star position in the scene
    starRef.current.position.set(...newPosition);
  });

  return (
    <mesh ref={starRef} visible={position[1] > -5}> {/* Only visible if within the viewable range */}
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      {/* Directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Earth model */}
      <Earth />
      
      {/* Stars in the background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Falling star animation */}
      <FallingStar />

      {/* Orbit controls for rotation */}
      <OrbitControls />
    </Canvas>
  );
}
