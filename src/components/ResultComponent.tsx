// src/components/ResultComponent.tsx

import React from "react";
import Latex from "react-latex-next";

interface ResultComponentProps {
  result: string;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ result }) => {
  return (
    <div>
      <Latex>{result}</Latex>
    </div>
  );
};

export default ResultComponent;
