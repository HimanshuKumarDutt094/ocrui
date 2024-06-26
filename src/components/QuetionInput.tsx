// src/components/QuestionInputComponent.tsx

import React, { useState } from "react";

const QuestionInput: React.FC = () => {
  const [question, setQuestion] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <div>
      <textarea
        value={question}
        onChange={handleInputChange}
        placeholder="Type or paste your math/science question here"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default QuestionInput;
