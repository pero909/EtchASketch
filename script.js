let slider=document.getElementById("sliderValue");
let setOutput=document.getElementById("slideOutput");
setOutput.innerHTML=slider.value;
populateBoard();
slider.onchange=function (event){
    setOutput.innerHTML=slider.value;
    populateBoard();

}
let color="";
let currentMode='default';

let colorBtn=document.getElementById('colorBtn');
let rainbowBtn=document.getElementById('rainbowBtn');
let eraserBtn=document.getElementById('eraserBtn');

colorBtn.onclick= () => setCurrentMode('default');
rainbowBtn.onclick= () =>setCurrentMode('rainbow');
eraserBtn.onclick= () =>setCurrentMode('eraser');


function setCurrentMode(newMode){
    currentMode=newMode;
}

/*filling board with squares*/
function populateBoard() {
    let board = document.querySelector('.board');

    let size = slider.value * slider.value;
    let removeSquares=board.querySelectorAll('div');
    removeSquares.forEach(div=>div.remove());
    board.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');

        let colorMode=document.getElementById("colorBtn");
        square.addEventListener("mouseover",()=>{
            colorSquare(square);
        });

        board.insertAdjacentElement("beforeend", square);
    }
}
/*Coloring of Squares*/
function colorSquare(square){
    let color=document.getElementById('colorPicker').value;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    if(currentMode==='default'){
        square.style.backgroundColor=`${color}`;
    }else if(currentMode==='rainbow'){
        square.style.backgroundColor=`${"#"+randomColor}`;
    }else if(currentMode==='eraser'){
        square.style.backgroundColor="lightgrey"
    }

}
function reset(){
    let board = document.querySelector('.board');
    let removeSquares=board.querySelectorAll('div');
    removeSquares.forEach(div=>div.remove());
    populateBoard();

}
