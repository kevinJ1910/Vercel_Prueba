import { Vector3 } from "three";
import { create } from "zustand";

const useHouseStore = create((set) => ({
  transformsHouse: {
    position: new Vector3(),
    rotation: new Vector3(),
    scale: new Vector3(),
  },

  setHouseTransforms: (newTransformsHouse) =>
    set((state) => ({
      transformsHouse: {
        ...state.transformsHouse, // Spread
        ...newTransformsHouse,
      },
    })),
}));

export default useHouseStore;
