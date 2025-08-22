import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const RangoliBox = () => {
  const texture = useTexture(
    "https://m.media-amazon.com/images/I/61bmh7p8Y5L._AC_UF1000,1000_QL80_.jpg"
  );

  return (
    <mesh>
      {/* Box with width, height, depth */}
      <boxGeometry args={[3, 2, 1]} />
      {/* Apply texture only on the front, gray on others */}
      {Array(6)
        .fill()
        .map((_, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            map={i === 4 ? texture : null} // apply texture only on one face (front)
            color={i === 4 ? "white" : "#cccccc"} // other faces plain gray
          />
        ))}
    </mesh>
  );
};

const RangoliBox3D = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [4, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <RangoliBox />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default RangoliBox3D;
