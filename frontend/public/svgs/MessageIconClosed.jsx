export default function MessageIconClosed({ selected }) {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5483 17.0827H6.40476C3.66171 17.0827 1.83301 15.8327 1.83301 12.916V7.08268C1.83301 4.16602 3.66171 2.91602 6.40476 2.91602H15.5483C18.2913 2.91602 20.12 4.16602 20.12 7.08268V12.916C20.12 15.8327 18.2913 17.0827 15.5483 17.0827Z"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5478 7.5L12.6859 9.58333C11.7441 10.2667 10.1989 10.2667 9.25707 9.58333L6.4043 7.5"
        stroke={selected ? "#2DDB81" : '#84818A'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
