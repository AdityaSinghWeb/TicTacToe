let box = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector("#msg-container");
let reset = document.querySelector(".reset-btn");
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;
let count = 0;
box.forEach((el) => {
  el.addEventListener("click", () => {
    if (turnO) {
      el.innerText = "O";
      turnO = false;
      el.style.color = "red";
    } else {
      el.innerText = "X";
      turnO = true;
      el.style.color = "blue";
    }
    el.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      draw();
    }
  });
});

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) {
    let pos1 = box[winPatterns[i][0]].innerText;
    let pos2 = box[winPatterns[i][1]].innerText;
    let pos3 = box[winPatterns[i][2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        winner(pos1);
      }
    }
  }
}
const winner = (winnerSymbol) => {
  msg.innerText = `Winner is ${winnerSymbol}`;
  msgContainer.classList.remove("hide");
  disable();
};
const draw = () => {
  msg.innerText = "Match Draw";
  msgContainer.classList.remove("hide");
  disable();
};
const disable = () => {
  box.forEach((el) => {
    el.disabled = true;
  });
};
reset.addEventListener("click", () => {
  box.forEach((el) => {
    el.innerText = "";
    el.disabled = false;
  });
  turnO = true;
  count = 0;
  msgContainer.classList.add("hide");
});
