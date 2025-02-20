import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function Background() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useEffect(() => {
    if (!pointsRef.current) return;
    
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      vertices.push(x, y, z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    pointsRef.current.geometry = geometry;
  }, []);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x += 0.0002;
    pointsRef.current.rotation.y += 0.0001;
  });
  
  return (
    <points ref={pointsRef}>
      <pointsMaterial size={1.5} color="#4fc3dc" transparent opacity={0.8} />
    </points>
  );
}