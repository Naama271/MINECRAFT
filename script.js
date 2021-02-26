let startbtn = document.querySelector(".startbtn");

startbtn.addEventListener("click", hide);

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

restart();
//console.log(divsArr[2]);

function restart() {
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
}
//

let tools = document.querySelectorAll(".tool");

let obj = { wood: 0, leaves: 0, ground: 0, rock: 0 };
console.log(tools);

tools.forEach((tool) =>
  tool.addEventListener("click", function () {
    removeDiv(tool);
    // setDiv(tool);
  })
);

let invetoryleaves = document.querySelector(".invetory_leaves");
let invetoryWood = document.querySelector(".invetory_wood");
let invetoryGround = document.querySelector(".invetory_ground");
let invetoryRock = document.querySelector(".invetory_rock");

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
        // obj["PropertyD"] = 4;
        // console.log(obj);

        if (
          div.classList.contains("leaves") &&
          tool.classList.contains("axe")
        ) {
          div.classList.remove("leaves");

          obj.leaves++;
          // console.log(obj);

          invetoryleaves.innerHTML = obj.leaves;

        } else if (
          div.classList.contains("wood") &&
          tool.classList.contains("axe")
        ) {
          div.classList.remove("wood");

          obj.wood++;
          //  console.log(obj);

          invetoryWood.innerHTML = obj.wood;

        } else if (
          div.classList.contains("ground") &&
          tool.classList.contains("shoval")
        ) {
          div.classList.remove("ground");

          obj.ground++;
          //   console.log(obj);
         
          invetoryGround.innerHTML = obj.ground;

        } else if (
          div.classList.contains("rock") &&
          tool.classList.contains("pickaxe")
        ) {
          div.classList.remove("rock");

          obj.rock++;
          // console.log(obj);
          
          invetoryRock.innerHTML = obj.rock;
        }
      }
    });
  });
}


let setTool = document.querySelectorAll(".setTool");

setTool.forEach((tool) =>
  tool.addEventListener("click", function () {
    setDiv(tool);
   
  })
);

function setDiv(tool) {
  //  console.log(tool);
  divsArr.forEach(div => {
    return div.addEventListener("click", function () {

      console.log(tool.classList.value);
      // console.log(before, after, up, down);
      // console.log(before.classList.value==="");

      if (div.classList.value === "") {
        if (obj.rock > 0 &&  tool.classList.contains("rock")) {

          div.classList.add("rock");
          obj.rock--;
         // console.log(obj.rock);
          invetoryRock.innerHTML = obj.rock;

        }if (obj.leaves > 0 && tool.classList.contains("leaves")) {

            div.classList.add("leaves");
            obj.leaves--;
            
            invetoryleaves.innerHTML = obj.leaves;
            
          } if (obj.wood > 0 && tool.classList.contains("wood")) {
            obj.wood--;
            
            div.classList.add("wood");
            invetoryWood.innerHTML = obj.wood;
            
          }if (obj.ground > 0 && tool.classList.contains("ground")) {
            obj.ground--;
            div.classList.add("ground");
            invetoryGround.innerHTML = obj.ground;
          }
      }
    });
  });
}
