/* eslint-disable react/no-unknown-property */
import { TrackballControls } from "@react-three/drei"; // Usar TrackballControls
import { Canvas } from "@react-three/fiber";
import House from "./House";
import React from "react";
import useHouseStore from "../../stores/use-house-store";

const World = () => {
  const cameraSettings = {
    position: [2, 0, 5],
  };

  const { transformsHouse } = useHouseStore();

  return (
    <React.Fragment>
      <Canvas camera={cameraSettings}>
        <TrackballControls /> {}
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />
        <House />
      </Canvas>
    </React.Fragment>
  );
};

export default World;
