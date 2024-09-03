import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useHouseStore from "../../stores/use-house-store";

/* eslint-disable react/no-unknown-property */
const House = () => {
  const houseRef = useRef(null);
  const {setHouseTransforms} = useHouseStore();

  useFrame((state, delta) => {
    houseRef.current.rotation.y += 1 * delta;
    setHouseTransforms({
        position: houseRef.current.position,
        rotation: houseRef.current.rotation,
        scale: houseRef.current.scale,
    })
  });

  return (
    <group ref={houseRef} name="house" scale={[2, 3, 1]}>
      <mesh name="roof" position-y={1} rotation-y={Math.PI / 4} scale-y={1.5}>
        <coneGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={0x6c3483} />
      </mesh>
      <mesh name="structure">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe={false} color="red" />
      </mesh>
    </group>
  );
};

export default House;
