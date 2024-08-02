import React from "react";
import { GiMaterialsScience } from "react-icons/gi";

function Publications() {
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="p-4">Publications</h2>
      <div className="flex gap-6 items-center justify-center flex-wrap">
        <div className="flex flex-col items-center justify-center basis-1/4">
          <GiMaterialsScience size={40} />
          <>Science</>
        </div>
      </div>
    </div>
  );
}

export default Publications;
