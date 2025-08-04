const containerSize =500;
const gridSize=16;
const container=document.getElementById("container");

function createGrid(){
    
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
createGrid();
