let expression = "";
const eventDiv = document.querySelector(".event-div");
const displayDiv = document.querySelector(".calc-display");
eventDiv.addEventListener("click", function (e) {
  //   console.log(e.target);
  // Using the concept of event-bubbling up, we add only one event-listener to a parent element, and check if it was
  // a button.

  if (e.target.tagName !== "BUTTON") return; // Only proceed if it was a button
  //   console.log("Button Clicked:", e.target.textContent);

  const enteredValue = e.target.textContent;
  if (enteredValue === "AC") {
    expression = "";
    displayDiv.textContent = "0";
    return;
  }
  if (enteredValue === "=") {
    try {
      expression = String(eval(expression));
    } catch (e) {
      alert("Incorrect operands or numbers");
      expression = "";
      displayDiv.textContent = "0";
      return;
    }
  } else {
    expression += enteredValue;
  }
  //   console.log("Expression: ", expression);
  displayDiv.textContent = expression;
  if (expression === "0") expression = "";
});
