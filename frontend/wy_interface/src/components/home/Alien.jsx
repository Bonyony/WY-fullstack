import React, { Suspense, useState } from "react";

// 3d models
import AlienModels from "./r3f/AlienModels";

const Alien = () => {
  const [speed, setSpeed] = useState(1);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <Suspense>
        <AlienModels speed={speed} />
      </Suspense>
    </div>
  );
};

export default Alien;
