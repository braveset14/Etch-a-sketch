const containerSize =500;
const gridSize=16;
const container=document.getElementById("container");
createGrid(gridSize);
function createGrid(gridSize){
    
    container.innerHTML='';
    let  squareSize = 500/gridSize;
    for(let i=0;i<gridSize * gridSize;i++){
        const square=document.createElement("div");
        square.classList.add('square');
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.style.boxSizing = 'border-box'; // Add this line
        square.style.border = '1px solid #ddd';
        square.style.margin='0';
        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor='black';
        })
        square.addEventListener("mouseleave",()=>{
            square.style.backgroundColor='#555555';
        })
        container.appendChild(square);
    }
}

function getGrid(){
let gridS=parseInt(prompt("Please enter the grid size of choice less than 100."));
if(gridS>100 || gridS<1 || isNaN(gridS)) {
   gridS= prompt("Please enter a number less than 100");
}
createGrid(gridS);
}
document.getElementById("mybtn").onclick=getGrid;
