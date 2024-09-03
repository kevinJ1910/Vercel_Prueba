/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "./House";
import React from "react";
import useHouseStore from "../../stores/use-house-store";

const World = () => {
  const cameraSettings = {
    position: [2, 0, 5],
  };

  const {transformsHouse} = useHouseStore();

  return (
    <React.Fragment>
      <h1 className="title"> La casa tiene una rotación de {transformsHouse.rotation.y} </h1>
      <Canvas camera={cameraSettings}>
        <OrbitControls enablePan={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />
        <House />
      </Canvas>
    </React.Fragment>
  );
};

export default World;
