import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useHouseStore from "../../stores/use-house-store";

/* eslint-disable react/no-unknown-property */
const House = () => {
  const houseRef = useRef(null);
  const { setHouseTransforms } = useHouseStore();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    houseRef.current.position.y = Math.cos(time) * 70; // Animación con coseno

    setHouseTransforms({
      position: houseRef.current.position,
      rotation: houseRef.current.rotation,
      scale: houseRef.current.scale,
    });
  });

  return (
    <group ref={houseRef} name="house" scale={[4, 5, 8]}>
      <mesh name="structure" position-y={0} rotation-y={Math.PI/4} scale-y={1.5}>
        <torusGeometry args={[14, 5, 16, 100]} /> {/* args: (radius, tube, radialSegments, tubularSegments) */}
        <meshNormalMaterial wireframe={true} color={"yellow"} />
      </mesh>
    </group>
  );
};

export default House;

