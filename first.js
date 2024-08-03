

// mode.addEventListener("click",()=>{
    
//     if(currMode === "light"){
//         currMode = "dark";
//         console.log("dark");
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode = "light";
//         console.log("light");
//         document.querySelector("body").style.backgroundColor="white";
//     }
// });

// let mode = document.querySelector("#mode");
// console.log(mode);
// let body = document.querySelector("body");
// let currMode = "light";

// mode.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//     } else {
//         currMode = "light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
//     console.log(currMode);
// });

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true //playerX;
let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO = true;
    anableBoxes();
    msgContainer.classList.add("hide"); 
};
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO === true){
            box.innerText = "0";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const anableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);
                showWinner();
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);