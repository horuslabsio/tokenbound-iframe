import * as React from "react";
import { SVGProps } from "react";

export const TBALogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeOpacity={0.7}
      strokeWidth={2.075}
      d="M6.413 5.226a1.872 1.872 0 0 0-.234 3.737c1.364.065 2.401-1.813 2.728-2.448.327-.635 1.411-3.27.355-4.307C7.982.956 4.357 1.423 2.61 3.516c-2.261 2.69-1.374 8.082 1.71 9.287 2.457.935 6.241-.757 7.68-4.672"
    />
  </svg>
);
export const TBALogo2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 316.55 316.54"
  >
    <defs></defs>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m158.27,0C70.86,0,0,70.86,0,158.27s70.86,158.27,158.27,158.27,158.27-70.86,158.27-158.27S245.68,0,158.27,0Zm54.1,67.35c-15.29-14.95-40.61-17.23-62.16-13.51-22.5,3.89-46.84,15.16-63.19,34.73-21.17,25.21-26.64,61.4-21.09,92.74,5.51,31.13,22.94,62.68,53.72,74.72l.14.05c48.1,18.29,114.1-15,138.37-81.03,3.03-8.25-1.2-17.39-9.44-20.42-8.25-3.03-17.39,1.2-20.42,9.44-19.85,54-69.84,72.6-97.13,62.29-16.47-6.48-29.46-25.48-33.9-50.6-4.41-24.92.65-50.7,14.14-66.75l.03-.04c10.45-12.51,27.3-20.87,44.19-23.79,17.84-3.08,30.12.65,34.48,4.89.53.53,1.59,2.02,2,5.94.41,3.95-.01,9.03-1.21,14.81-2.4,11.58-7.23,22.75-9.24,26.67-2.37,4.6-6.89,12.84-12.81,19.64-6.38,7.32-11.19,9.38-14.02,9.3-1.63-.12-3.23-.55-4.7-1.27-1.51-.74-2.86-1.77-3.97-3.03-1.11-1.26-1.97-2.73-2.51-4.32-.55-1.59-.77-3.27-.67-4.95.1-1.68.54-3.32,1.28-4.83.74-1.51,1.77-2.86,3.03-3.97,1.26-1.11,2.73-1.97,4.32-2.51,1.59-.55,3.27-.77,4.95-.67,8.77.55,16.32-6.12,16.87-14.89.55-8.77-6.12-16.32-14.89-16.87-5.85-.37-11.71.42-17.26,2.33-5.54,1.9-10.66,4.87-15.05,8.75-4.39,3.88-7.98,8.58-10.56,13.85-2.58,5.26-4.09,10.98-4.46,16.83-.37,5.85.42,11.71,2.32,17.26,1.9,5.54,4.87,10.66,8.75,15.05,3.88,4.39,8.58,7.98,13.85,10.56,5.26,2.58,10.98,4.09,16.83,4.46h.23c18.1.88,31.66-11,39.65-20.17,8.52-9.79,14.45-20.82,17.1-25.96,3-5.83,8.99-19.73,12.11-34.77,1.56-7.53,2.57-16.15,1.7-24.55-.87-8.41-3.79-17.94-11.36-25.37l-.02-.02Z"
    ></path>
  </svg>
);
export const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 26.23 26.23"
    {...props}
  >
    <g data-name="Layer 1">
      <path
        fill="#ff8a00"
        d="M13.12 0C11.4 0 9.69.34 8.1 1c-1.59.66-3.04 1.63-4.26 2.84C1.38 6.3 0 9.64 0 13.12s1.38 6.82 3.84 9.28c1.22 1.22 2.66 2.18 4.26 2.84a13.124 13.124 0 0 0 14.3-2.84 13.124 13.124 0 0 0 2.84-14.3c-.66-1.59-1.63-3.04-2.84-4.26A13.038 13.038 0 0 0 18.14 1c-1.59-.66-3.3-1-5.02-1Z"
      />
      <g fill="#fff">
        <path d="M11.81 6.56h2.62v7.87h-2.62zM11.81 17.05h2.62v2.62h-2.62z" />
      </g>
    </g>
  </svg>
);

export const OpenNewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-external-link"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
  </svg>
);

export const WarnIcon = () => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26.23 26.23"
    >
      <defs></defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path
            fill="#0C0C4F"
            d="m13.12,0c-1.72,0-3.43.34-5.02,1-1.59.66-3.04,1.63-4.26,2.84C1.38,6.3,0,9.64,0,13.12s1.38,6.82,3.84,9.28c1.22,1.22,2.66,2.18,4.26,2.84,1.59.66,3.3,1,5.02,1,3.48,0,6.82-1.38,9.28-3.84,2.46-2.46,3.84-5.8,3.84-9.28,0-1.72-.34-3.43-1-5.02-.66-1.59-1.63-3.04-2.84-4.26-1.22-1.22-2.66-2.18-4.26-2.84-1.59-.66-3.3-1-5.02-1Z"
          ></path>
          <g>
            <rect
              fill="#ffffff"
              x="11.81"
              y="6.56"
              width="2.62"
              height="7.87"
            ></rect>
            <rect
              fill="#ffffff"
              x="11.81"
              y="17.05"
              width="2.62"
              height="2.62"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
      />
    </svg>
  );
};

export const LockedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        stroke="currentColor"
        strokeWidth={0.7}
        d="M13 7h-1V5a4 4 0 1 0-8 0v2H3L2 8v6l1 1h10l1-1V8zM5 5a3 3 0 1 1 6 0v2H5zm8 9H3V8h10z"
      />
    </svg>
  );
};
