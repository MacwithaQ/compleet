import * as React from "react";

function DailyPlanner(props) {
  return (
    <svg
      width={58}
      height={58}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_16_54)">
        <path
          d="M4 5a5 5 0 015-5h40a5 5 0 015 5v40a5 5 0 01-5 5H9a5 5 0 01-5-5V5z"
          fill="#FF6334"
        />
        <path
          d="M18.5 5.5H40A3.5 3.5 0 0143.5 9v28a3.5 3.5 0 01-3.5 3.5H18.5v-35z"
          stroke="#96D900"
          strokeWidth={3}
        />
        <path
          stroke="#96D900"
          d="M14.5 10.5h6v1h-6zM14.5 34.5h6v1h-6zM14.5 28.5h6v1h-6zM14.5 22.5h6v1h-6zM14.5 16.5h6v1h-6z"
        />
        <path stroke="#96D900" strokeWidth={3} d="M26.5 4v38" />
        <mask id="prefix__a" fill="#fff">
          <rect x={31} y={12} width={9} height={5} rx={1} />
        </mask>
        <rect
          x={31}
          y={12}
          width={9}
          height={5}
          rx={1}
          stroke="#96D900"
          strokeWidth={5}
          mask="url(#prefix__a)"
        />
        <path fill="#96D900" d="M35 39h3v7h-3z" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_16_54"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_54" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_16_54"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default DailyPlanner;
