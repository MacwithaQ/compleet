import * as React from "react";

function AddIco(props) {
  return (
    <svg
      width={30}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        rx={15}
        ry={14.5}
        transform="matrix(-1 0 0 1 15 14.5)"
        fill="#FF6334"
      />
      <rect
        x={12.692}
        y={2.32}
        width={4.615}
        height={23.78}
        rx={2.308}
        fill="#FFB400"
      />
      <rect
        x={27.115}
        y={12.18}
        width={4.06}
        height={23.654}
        rx={2.03}
        transform="rotate(90 27.115 12.18)"
        fill="#FFB400"
      />
    </svg>
  );
}

export default AddIco;
