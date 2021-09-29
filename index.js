let userlist = [];
let start = document.querySelector(".start");
let delnum = document.querySelector(".delnum");
let input = document.querySelector(".name");
const result = document.querySelector(".output");

function draw() {
  result.innerHTML = null;
  var element = document.querySelector(".mystyle");
  if (typeof (element == "undefined" && element == null)) {
    let newol = document.createElement("ol");
    newol.classList.add("mystyle");
    for (var i = 0; i < userlist.length; i++) {
      let newli = document.createElement("li");
      let text = document.createTextNode(userlist[i]);
      newol.appendChild(newli);
      newli.appendChild(text);
      result.appendChild(newol);
    }
  }
}

function select(className) {
  if (input.value != null && input.value != "") {
    switch (className) {
      case "btn-adduser-push":
        userlist.push(input.value);
        break;
      case "btn-adduser-unshift":
        userlist.unshift(input.value);
        break;
      case "btn-adduser-shift":
        userlist.shift();
        break;
      case "btn-adduser-pop":
        userlist.pop();
        break;
      case "btn-reverse":
        userlist.reverse();
        break;
      case "btn-splice-remove":
        if (delnum.value == 0) {
          delnum.value = 1;
        }
        userlist.splice(start.value - 1, delnum.value);
        break;
      case "btn-splice-add":
        userlist.splice(start.value - 1, delnum.value, input.value);
        break;
      case "moveUp":
        let b = userlist.shift();
        userlist.push(b);
        break;
      case "moveDown":
        let a = userlist.pop();
        userlist.unshift(a);
        break;
      default:
    }
    draw();
  }
}
let buttons = document.querySelector("body");
buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    select(event.target.className);
  }
});
