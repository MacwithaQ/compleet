import * as React from "react";

function PlayIcon(props) {
  return (
    <svg
      width={25}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 14.939C0 23.227.075 30 .15 30 .35 30 25.075 15.037 25 14.963 24.95 14.915.902.416.2 0 .075-.049 0 6.675 0 14.94z"
        fill="#96D900"
      />
    </svg>
  );
}

export default PlayIcon;
