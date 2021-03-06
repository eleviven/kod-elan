import * as React from "react";

function SvgMinus(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.542 2.369a4.81 4.81 0 00-4.173 4.173C2.169 8.052 2 9.942 2 12c0 2.059.17 3.948.369 5.458a4.81 4.81 0 004.173 4.173c1.51.2 3.4.369 5.458.369 2.059 0 3.948-.17 5.458-.369a4.81 4.81 0 004.173-4.173c.2-1.51.369-3.4.369-5.458 0-2.059-.17-3.948-.369-5.458a4.81 4.81 0 00-4.173-4.173C15.948 2.169 14.058 2 12 2c-2.059 0-3.948.17-5.458.369zM7 12a1 1 0 001 1h8a1 1 0 100-2H8a1 1 0 00-1 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinus;
