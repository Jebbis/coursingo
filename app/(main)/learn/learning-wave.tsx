import React from "react";

type Props = {
  isCompleted?: boolean;
  locked?: boolean;
  current?: boolean;
};

const WavyLine = ({ isCompleted, locked, current }: Props) => {
  return (
    <svg
      width="200px"
      height="200px"
      viewBox="0 0 20 20"
      transform="rotate(90)"
    >
      <path
        d="M20,10
      c-4.73,0 -4.73,4.21 -9.47,4.21
      s-4.73,-4.21 -11,-4.21"
        fill="none"
        stroke={locked ? "#737780" : "#46d179"}
        strokeWidth="1"
        stroke-dasharray={current ? "1.5,1" : "0"}
      />
    </svg>
  );
};

export default WavyLine;
