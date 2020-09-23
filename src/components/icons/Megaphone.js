import * as React from "react";

function SvgMegaphone(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M4.61 16a.5.5 0 00-.49.598c.16.806.442 2.226.582 2.952.201 1.05.807 1.45 1.642 1.45C7.26 21 8 20.259 8 19.344V16.5a.5.5 0 00-.5-.5H4.61zM4 8a3 3 0 000 6h3.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H4zM10.31 7.13A.516.516 0 0010 7.6v6.803c0 .203.124.385.31.468.364.163.72.348 1.065.555l4.596 2.758c1.333.8 3.029-.16 3.029-1.715V5.532c0-1.554-1.696-2.514-3.029-1.715l-4.596 2.758a10 10 0 01-1.066.555zM21 10a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMegaphone;
