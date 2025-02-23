import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = ({ images, isMobile }) => {
  const meshRef = useRef();
  const textureLoader = new THREE.TextureLoader();

  // Load textures for each side of the cube
  const textures = images.map((img) => textureLoader.load(img));

  // Adjusted auto-rotation speed
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.05;
  });

  const materials = textures.map((texture) => {
    // Improve texture quality
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return new THREE.MeshBasicMaterial({ map: texture });
  });

  // Increased mobile scale from 2.8 to 3.2
  const scale = isMobile ? [3.2, 3.2, 3.2] : [3.5, 3.5, 3.5];

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <meshBasicMaterial
          attach={`material-${index}`}
          key={index}
          map={material.map}
        />
      ))}
    </mesh>
  );
};

const ImageCube = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-[500px] sm:h-[550px] md:h-[600px]">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 6.5 : 7],
          fov: isMobile ? 52 : 50,
        }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Cube images={images} isMobile={isMobile} />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={isMobile ? 0.8 : 0.7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={isMobile ? 0.8 : 1}
          touchRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
};

export default ImageCube;
