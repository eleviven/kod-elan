import * as React from "react";

function SvgArrowLeft(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.369 6.542a4.81 4.81 0 014.173-4.173C8.052 2.169 9.942 2 12 2c2.059 0 3.948.17 5.458.369a4.81 4.81 0 014.173 4.173c.2 1.51.369 3.4.369 5.458 0 2.059-.17 3.948-.369 5.458a4.81 4.81 0 01-4.173 4.173c-1.51.2-3.4.369-5.458.369-2.059 0-3.948-.17-5.458-.369a4.81 4.81 0 01-4.173-4.173C2.169 15.948 2 14.058 2 12c0-2.059.17-3.948.369-5.458zm11.838 2.665a1 1 0 00-1.414-1.414l-3.5 3.5a1 1 0 000 1.414l3.5 3.5a1 1 0 001.414-1.414L11.414 12l2.793-2.793z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeft;
