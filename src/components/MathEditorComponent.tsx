import React, { useState } from "react";
import { MathJaxEditor } from "react-mathjax-editor";

interface TextWithLatexProps {
  text: string;
}

const TextWithLatex: React.FC<TextWithLatexProps> = ({ text }) => {
  const [value, setValue] = useState<string>(text);
  return <MathJaxEditor value={value} onChange={setValue} />;
  3;
};

export default TextWithLatex;
