import * as React from "react";

function Logo(props) {
  return (
    <svg
      width={100}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 15C0 6.716 6.716 0 15 0h70c8.284 0 15 6.716 15 15v70c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V15z"
        fill="#FF6334"
      />
      <g filter="url(#prefix__filter0_d_7_17)">
        <rect
          x={10}
          y={56.127}
          width={23}
          height={41.469}
          rx={8}
          transform="rotate(-48.128 10 56.127)"
          fill="#005800"
        />
      </g>
      <g filter="url(#prefix__filter1_d_7_17)">
        <rect
          x={72.487}
          y={16}
          width={23}
          height={72.228}
          rx={8}
          transform="rotate(42.168 72.487 16)"
          fill="#96D900"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_7_17"
          x={9.297}
          y={42.297}
          width={47.637}
          height={46.212}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_17" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7_17"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_7_17"
          x={23.3}
          y={19.3}
          width={66.934}
          height={70.374}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_17" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7_17"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
