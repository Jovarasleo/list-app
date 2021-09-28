let userlist = [];
let input = document.querySelector(".name");
const button = document.querySelector(".btn-adduser-push");
const button1 = document.querySelector(".btn-adduser-unshift");
const button2 = document.querySelector(".btn-adduser-shift");
const button3 = document.querySelector(".btn-adduser-pop");
const button4 = document.querySelector(".btn-reverse");
const result = document.querySelector("body");

function draw() {
  let newli = document.createElement("li");
  for (var i = 0; i < userlist.length; i++) {
    let text = document.createTextNode(userlist[i]);
    newli.appendChild(text);
    result.appendChild(newli).innerHTML += ", ";
  }
}
button.addEventListener("click", () => {
  userlist.push(input.value);
  draw();
});
button1.addEventListener("click", () => {
  userlist.unshift(input.value);
  draw();
});
button2.addEventListener("click", () => {
  userlist.shift(input.value);
  draw();
});
button3.addEventListener("click", () => {
  userlist.pop(input.value);
  draw();
});
button4.addEventListener("click", () => {
  userlist.reverse(input.value);
  draw();
});
