const buttons = document.querySelectorAll(".button");
const screen = document.getElementById("screen");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    val = button.innerHTML;
    let output = screen.innerHTML;
    if (output === "") {
      if ( val >= '0' && val <= '9') {
        screen.innerHTML += val;
      }

      else if (val === '+' || val === "-" || val === "*" || val === "/" || val === "%" ) {
        
      }
    }

    else {
      if ( val >= '0' && val <= '9') {
        screen.innerHTML += val;
      }
    }
  });
});




