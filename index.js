// // const SwitchThemeButton = document.getElementById("SwitchThemeButton");
// // const LanguageSelect = document.getElementById("LanguageSelect");
// // const LatexInput = document.getElementById("LatexInput");
// // const SubmitButton = document.getElementById("SubmitButton");
// // const SimpleResult = document.getElementById("SimpleResult");
// // const FullResult = document.getElementById("FullResult");

// // const UTF8ToBase64 = (UTF8String) => {
// //   return btoa(unescape(encodeURIComponent(UTF8String)));
// // };

// // const SolveLatex = (LatexExpression, Language) => {
// //   FullResult.innerHTML = "";
// //   Result.forEach((Item) => {
// //     const AccordionItem = document.createElement("div");
// //     AccordionItem.className = "accordion-item";
// //     const AccordionHeader = document.createElement("h2");
// //     AccordionHeader.className = "accordion-header";
// //     const AccordionButton = document.createElement("button");
// //     AccordionButton.className = "accordion-button";
// //     AccordionButton.type = "button";
// //     AccordionButton.setAttribute("data-bs-toggle", "collapse");
// //     AccordionButton.setAttribute(
// //       "data-bs-target",
// //       `#collapse${UTF8ToBase64(Item.Name)}`
// //     );
// //     AccordionButton.innerHTML = Item.Name;
// //     const AccordionCollapse = document.createElement("div");
// //     AccordionCollapse.id = `collapse${UTF8ToBase64(Item.Name)}`;
// //     AccordionCollapse.className = "accordion-collapse collapse show";
// //     const AccordionBody = document.createElement("div");
// //     AccordionBody.className = "accordion-body";
// //     const AccordionBodyText = document.createElement("p");
// //     AccordionBodyText.classList.add("mb-2");
// //     AccordionBodyText.innerHTML = Item.Answer;
// //     AccordionBody.appendChild(AccordionBodyText);
// //     const TemplateAccordion = document.createElement("div");
// //     TemplateAccordion.className = "accordion";
// //     Item.TemplateSteps.forEach((TemplateSteps) => {
// //       const TemplateAccordionItem = document.createElement("div");
// //       TemplateAccordionItem.className = "accordion-item";
// //       const TemplateStepsHeader = document.createElement("div");
// //       TemplateStepsHeader.className = "accordion-header";
// //       const TemplateStepsButton = document.createElement("button");
// //       TemplateStepsButton.className = "accordion-button collapsed";
// //       TemplateStepsButton.type = "button";
// //       TemplateStepsButton.setAttribute("data-bs-toggle", "collapse");
// //       TemplateStepsButton.setAttribute(
// //         "data-bs-target",
// //         `#collapse${UTF8ToBase64(TemplateSteps.Name)}`
// //       );
// //       TemplateStepsButton.innerHTML = TemplateSteps.Name;
// //       TemplateStepsHeader.appendChild(TemplateStepsButton);
// //       const TemplateStepsCollapse = document.createElement("div");
// //       TemplateStepsCollapse.id = `collapse${UTF8ToBase64(TemplateSteps.Name)}`;
// //       TemplateStepsCollapse.className = "accordion-collapse collapse";
// //       const TemplateStepsBody = document.createElement("div");
// //       TemplateStepsBody.className = "accordion-body";
// //       TemplateSteps.Steps.forEach((Step) => {
// //         const Card = document.createElement("div");
// //         Card.className = "card mb-2";
// //         const CardBody = document.createElement("div");
// //         CardBody.className = "card-body";
// //         const CardTitle = document.createElement("h5");
// //         CardTitle.className = "card-title";
// //         CardTitle.innerHTML = Step.Hint;
// //         const CardText = document.createElement("p");
// //         CardText.className = "card-text";
// //         CardText.innerHTML = Step.Step;
// //         const CardFooter = document.createElement("div");
// //         CardFooter.className = "card-footer";
// //         const CardFooterText = document.createElement("small");
// //         CardFooterText.className = "text-muted";
// //         CardFooterText.innerHTML = Step.Expression;
// //         CardBody.appendChild(CardTitle);
// //         CardBody.appendChild(CardText);
// //         CardFooter.appendChild(CardFooterText);
// //         Card.appendChild(CardBody);
// //         Card.appendChild(CardFooter);
// //         TemplateStepsBody.appendChild(Card);
// //       });
// //       TemplateStepsCollapse.appendChild(TemplateStepsBody);
// //       TemplateAccordionItem.appendChild(TemplateStepsHeader);
// //       TemplateAccordionItem.appendChild(TemplateStepsCollapse);
// //       TemplateAccordion.appendChild(TemplateAccordionItem);
// //     });
// //     AccordionBody.appendChild(TemplateAccordion);
// //     AccordionCollapse.appendChild(AccordionBody);
// //     AccordionHeader.appendChild(AccordionButton);
// //     AccordionItem.appendChild(AccordionHeader);
// //     AccordionItem.appendChild(AccordionCollapse);
// //     FullResult.appendChild(AccordionItem);
// //   });
// //   MathJax.typesetPromise();
// // };

// MathJax = {
//   loader: {
//     load: ["input/tex-base", "output/chtml"],
//   },
//   tex: {
//     inlineMath: [["$", "$"]],
//     displayMath: [["$$", "$$"]],
//     processEscapes: true,
//     processEnvironments: true,
//     packages: { "[+]": ["noerrors"] },
//   },
// };
