import React, { Suspense, useState } from "react";

// 3d models
import AlienModels from "./r3f/AlienModels";
import Loading from "../Loading";

const Alien = () => {
  const [speed, setSpeed] = useState(1);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <Suspense fallback={<Loading />}>
        <AlienModels speed={speed} />
      </Suspense>
    </div>
  );
};

export default Alien;
