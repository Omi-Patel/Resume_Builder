import { Spinner } from "@nextui-org/react";
import React from "react";

const Loader = ({size}) => {
  return (
    <div className="text-center flex items-center justify-center">
      <Spinner color="white" size={size} />
    </div>
  );
};

export default Loader;