import { MathJax } from "better-react-mathjax";
interface Result {
  name?: string;
  Answer?: string;
  TemplateSteps?: any;
}
const MathSolver: React.FC<Result> = ({ TemplateSteps }) => {
  return (
    <div>
      <h2>Extracted LaTeX:</h2>
      <h2>Solution:</h2>
      <MathJax>{TemplateSteps}</MathJax>

      <div id="FullResult"></div>
    </div>
  );
};

export default MathSolver;
