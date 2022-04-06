import * as React from "react";

function Categories(props) {
  return (
    <svg
      width={58}
      height={58}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_16_30)">
        <rect x={4} width={50} height={50} rx={5} fill="#FF6334" />
        <circle cx={12} cy={10} r={4} fill="#96D900" />
        <path stroke="#96D900" d="M12 9.5h37" />
        <circle cx={12} cy={40} r={4} fill="#96D900" />
        <path stroke="#96D900" d="M12 39.5h37" />
        <circle cx={12} cy={30} r={4} fill="#96D900" />
        <path stroke="#96D900" d="M12 29.5h37" />
        <circle cx={12} cy={20} r={4} fill="#96D900" />
        <path stroke="#96D900" d="M12 19.5h37" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_16_30"
          x={0}
          y={0}
          width={58}
          height={58}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_30" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_16_30"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Categories;
