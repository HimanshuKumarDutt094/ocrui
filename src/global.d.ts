interface Window {
    MathJax: {
        typesetPromise: () => Promise<void>;
    };
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}