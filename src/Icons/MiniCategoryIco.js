import * as React from "react";

function MiniCategoryIco(props) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_53_92)">
        <rect x={4} width={20} height={20} rx={5} fill="#FF6334" />
        <circle cx={7.2} cy={4} fill="#96D900" r={1.6} />
        <path stroke="#96D900" d="M7.2 3.5H22" />
        <circle cx={7.2} cy={16} r={1.6} fill="#96D900" />
        <path stroke="#96D900" d="M7.2 15.5H22" />
        <circle cx={7.2} cy={12} fill="#96D900" r={1.6} />
        <path stroke="#96D900" d="M7.2 11.5H22" />
        <circle cx={7.2} cy={8} r={1.6} fill="#96D900" />
        <path stroke="#96D900" d="M7.2 7.5H22" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_53_92"
          x={0}
          y={0}
          width={28}
          height={28}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_53_92" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_53_92"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default MiniCategoryIco;
