let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector("Reset");
let ngb =document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){
            box.innerText ="o";
            turnO  = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        });
});
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner =() =>{
    for(pattern of winpatterns){
        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3vla = boxes[pattern[2]].innerText;

            if(pos1val !=""&& pos2val != ""&& pos3vla != ""){
                if(pos1val === pos2val && pos2val === pos3vla) {
                    
                    showWinner(pos1val);
                }
            }
    }
};

ngb.addEventListener("click",resetgame);
resetgame.addEventListener("click",resetgame);