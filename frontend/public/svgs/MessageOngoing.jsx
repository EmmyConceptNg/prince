import React from 'react'

export default function MessageOngoing({selected}) {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.37207 7.08268C2.37207 4.16602 4.20077 2.91602 6.94383 2.91602H16.0873C18.8304 2.91602 20.6591 4.16602 20.6591 7.08268V12.916C20.6591 15.8327 18.8304 17.0827 16.0873 17.0827H6.94383"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0869 7.5L13.2249 9.58333C12.2832 10.2667 10.7379 10.2667 9.79613 9.58333L6.94336 7.5"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.37207 13.75H7.85818"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.37207 10.416H5.11512"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
