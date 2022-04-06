import * as React from "react";

function CalendarIco(props) {
  return (
    <svg
      width={58}
      height={58}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_16_78)">
        <path fill="#FF6334" d="M16 12h26v26H16z" />
        <path
          d="M42 50l12-12H42v12zM54 12H42v26h12V12zM42 38H16v12h26V38z"
          fill="#96D900"
        />
        <path
          d="M4 38v8c0 2.21 1.79 4 4 4h8V38H4zM54 12V4c0-2.21-1.79-4-4-4h-8v12h12z"
          fill="#FF6334"
        />
        <path
          d="M42 0H7.931A3.93 3.93 0 004 3.931V38h11.793V11.793H42V0z"
          fill="#96D900"
        />
        <path
          d="M21.089 32.007c-1.01-.664-1.708-1.633-2.089-2.915l2.342-.94c.213.789.584 1.4 1.114 1.834.526.434 1.168.648 1.917.648.766 0 1.424-.227 1.974-.68.55-.454.827-1.033.827-1.733 0-.716-.29-1.302-.871-1.755-.58-.454-1.31-.68-2.18-.68H22.77v-2.259h1.215c.749 0 1.38-.197 1.893-.591.513-.395.77-.933.77-1.62 0-.612-.23-1.098-.69-1.463-.458-.365-1.039-.549-1.744-.549-.688 0-1.235.178-1.64.536-.405.359-.71.813-.884 1.318l-2.319-.94c.307-.848.87-1.598 1.698-2.245.827-.648 1.883-.973 3.165-.973.949 0 1.802.177 2.558.536.756.358 1.35.854 1.779 1.485a3.72 3.72 0 01.641 2.133c0 .806-.199 1.486-.597 2.045a4.08 4.08 0 01-1.468 1.285v.135c.75.3 1.4.795 1.883 1.43.49.64.735 1.406.735 2.3 0 .894-.232 1.693-.698 2.393-.466.7-1.11 1.252-1.927 1.653-.82.401-1.741.605-2.764.605a5.83 5.83 0 01-3.287-.993zm14.387-11.32L32.904 22.5l-1.286-1.9 4.614-3.24H38v15.286h-2.524V20.688z"
          fill="#96D900"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_16_78"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_78" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_16_78"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default CalendarIco;
