const btn = document.querySelector(".btn");
const container = document.querySelector("#container");

let canvasSize = 16;
btn.addEventListener("click",()=>{
    let cells = document.querySelectorAll(".cell");
    cells.forEach((c)=>c.remove());
    canvasSize=Number(prompt("Enter canvas size"));
    canvasSize = Math.min(100,canvasSize);
    for(i=0;i<canvasSize*canvasSize;i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.cssText = `height: ${100/canvasSize}%; width:${100/canvasSize}%;`
        container.append(cell);
    }
    console.log(canvasSize);
})