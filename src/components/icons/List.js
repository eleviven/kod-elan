import * as React from "react";

function SvgList(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.418 2.325c.292-.126.595.102.673.41A3.001 3.001 0 009 5h6c1.403 0 2.58-.963 2.91-2.264.077-.309.38-.537.672-.411A4.001 4.001 0 0121 6v13a4 4 0 01-4 4H7a4 4 0 01-4-4V6c0-1.647.996-3.062 2.418-3.675zM9 10a1 1 0 11-2 0 1 1 0 012 0zm2 0a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2h-4zm0 4a1 1 0 100 2h2a1 1 0 100-2h-2zm-3-3a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
      <path d="M9 1h6a1 1 0 110 2H9a1 1 0 010-2z" fill="currentColor" />
    </svg>
  );
}

export default SvgList;
