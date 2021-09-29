let userlist = [];
let start = document.querySelector(".start");
let delnum = document.querySelector(".delnum");
let input = document.querySelector(".name");
const result = document.querySelector("body");

function draw() {
  const resultSection =
    document.querySelector(".output") || document.createElement("section");
  resultSection.classList.add("output");
  if (typeof (resultSection == "undefined" && resultSection == null)) {
    resultSection.innerHTML = null;
    let element = document.querySelector(".mystyle");
    if (typeof (element == "undefined" && element == null)) {
      let newol = document.createElement("ol");
      newol.classList.add("mystyle");
      for (let i = 0; i < userlist.length; i++) {
        let newli = document.createElement("li");
        let text = document.createTextNode(userlist[i]);
        newol.appendChild(newli);
        newli.appendChild(text);
        resultSection.appendChild(newol);
        result.appendChild(resultSection);
      }
    }
  }
}
document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    if (input.value != null && input.value != "") {
      switch (event.target.className) {
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
          break;
      }
      draw();
    }
  }
});
