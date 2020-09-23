import * as React from "react";

function SvgEye(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20c5.027 0 8.474-3.158 10.342-5.506a3.967 3.967 0 000-4.988C20.474 7.158 17.027 4 12 4 6.974 4 3.526 7.158 1.658 9.506a3.967 3.967 0 000 4.988C3.526 16.842 6.974 20 12 20zm0-4a4 4 0 100-8 4 4 0 000 8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.002 11.915a1.992 1.992 0 00.498 1.408A2.001 2.001 0 0012 14a2 2 0 10-.085-3.998A1.5 1.5 0 0110.5 12a1.5 1.5 0 01-.498-.085z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEye;
