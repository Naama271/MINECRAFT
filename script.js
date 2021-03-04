let startbtn = document.querySelector(".startbtn");
let restartbtn = document.querySelector(".restartbtn");

startbtn.addEventListener("click", hide);
restartbtn.addEventListener("click", function () {
  location.reload()
});

function hide() {
  let hiddendiv = document.querySelector(".hidden");
  hiddendiv.style.display = "none";
  let gamediv = document.querySelector(".container");
  gamediv.style.display = "block";
}

let world_divs = document.querySelector(".world_divs");

for (let i = 0; i < 20; i++) {
  for (let x = 0; x < 30; x++) {
    world_divs.innerHTML += "<div></div>";
  }
}

let worldDiv = document.querySelectorAll(".world_divs div");
//console.log(worldDiv);

let divsArr = Array.from(worldDiv);



for (let i = 480; i < divsArr.length; i++) {
  div = divsArr[i];
  div.classList.add("ground");
}

for (let i = 320; i < 480; i += 30) {
  div = divsArr[i];
  div.classList.add("wood");
}

for (let i = 460; i < 465; i++) {
  div = divsArr[i];
  div.classList.add("rock");
}

for (let i = 431; i < 434; i++) {
  div = divsArr[i];
  div.classList.add("rock");
}
//leaves

for (let i = 198; i < 300; i += 30) {
  div = divsArr[i];
  div.classList.add("leaves");
}

for (let i = 199; i < 300; i += 30) {
  div = divsArr[i];
  div.classList.add("leaves");
}

for (let i = 200; i < 300; i += 30) {
  div = divsArr[i];
  div.classList.add("leaves");
}

for (let i = 201; i < 300; i += 30) {
  div = divsArr[i];
  div.classList.add("leaves");
}

for (let i = 202; i < 300; i += 30) {
  div = divsArr[i];
  div.classList.add("leaves");
}

// for (let i = 0 ; i < 4; i ++)  {
//   for (let x = 202; x <300; x ++ ) {
//     div = divsArr[x];
//     div.classList.add("leaves");}
// }
let obj = { wood: 0, leaves: 0, ground: 0, rock: 0 };

let leaves = document.querySelector(".invetory_leaves");
let wood = document.querySelector(".invetory_wood");
let ground = document.querySelector(".invetory_ground");
let rock = document.querySelector(".invetory_rock");

let tools = document.querySelectorAll(".tool");

tools.forEach((tool, index) =>
  tool.addEventListener("click", function () {
    for (let i = 0; i < alltools.length; i++) {
      alltools[i].classList.remove("active");
    }
    console.log(tools);
    tool.classList.add("active");
    // tools.classList.remove("active");
    console.log(tool);
    removeDiv(tool);
    // setDiv(tool);
  })
);

function removeDiv(tool) {
  //  console.log(tool);
  divsArr.forEach((div, index) => {
    return div.addEventListener("click", function () {
      let before = divsArr[index - 1];
      let after = divsArr[index + 1];
      let up = divsArr[index - 30];
      let down = divsArr[index + 30];

      // console.log(before, after, up, down);
      // console.log(before.classList.value==="");

      if (
        before.classList.value === "" ||
        after.classList.value === "" ||
        up.classList.value === "" ||
        down.classList.value === ""
      ) {
        checkRemoveDiv("leaves", "axe");
        checkRemoveDiv("wood", "axe");
        checkRemoveDiv("ground", "shoval");
        checkRemoveDiv("rock", "pickaxe");

        function checkRemoveDiv(x, y) {

          if (div.classList.contains(x) && tool.classList.contains(y)) {
            div.classList.remove(x);

            ++obj[x];
            // console.log(obj);

            setInvetory();
          }
        }
      }
    });
  });
}

let alltools = document.querySelectorAll(".control div");
let setTool = document.querySelectorAll(".setTool");

setTool.forEach((tool) =>
  tool.addEventListener("click", function () {
    for (let i = 0; i < alltools.length; i++) {
      alltools[i].classList.remove("active");
    }
    tool.classList.add("active");
    setDiv(tool);
  })
);

function setDiv(tool) {
  //  console.log(tool);
  divsArr.forEach((div) => {
    div.addEventListener("click", function () {
      //console.log(tool.classList.value);
      // console.log(before, after, up, down);

      //  console.log(tool);
      checkSetDiv("rock");
      checkSetDiv("leaves");
      checkSetDiv("wood");
      checkSetDiv("ground");

      function checkSetDiv(x) {
        if (div.classList.value === "") {
          if (obj[x] > 0 && tool.classList.contains(x)) {
            div.classList.add(x);
            --obj[x];

            setInvetory();
          }
        }
      }
    });
  });
}

function setInvetory() {
  rock.innerHTML = obj.rock;
  wood.innerHTML = obj.wood;
  ground.innerHTML = obj.ground;
  leaves.innerHTML = obj.leaves;
  //console.log(rock);
  //console.log(x);
}
