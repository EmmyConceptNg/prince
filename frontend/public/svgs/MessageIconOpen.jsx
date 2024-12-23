import React from 'react'

export default function MessageIconOpen({selected}) {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7851 8.74935V12.916C20.7851 15.8327 18.9564 17.0827 16.2133 17.0827H7.0698C4.32675 17.0827 2.49805 15.8327 2.49805 12.916V7.08268C2.49805 4.16602 4.32675 2.91602 7.0698 2.91602H13.4703"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.06934 7.5L9.93126 9.58333C10.873 10.2667 12.4183 10.2667 13.3601 9.58333L14.439 8.8"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4988 6.66667C19.7612 6.66667 20.7846 5.73393 20.7846 4.58333C20.7846 3.43274 19.7612 2.5 18.4988 2.5C17.2363 2.5 16.2129 3.43274 16.2129 4.58333C16.2129 5.73393 17.2363 6.66667 18.4988 6.66667Z"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
