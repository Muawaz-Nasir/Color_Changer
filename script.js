const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    } else {
      console.dir("No Changes Made");
    }
  });
});
