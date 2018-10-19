window.onload = function(){
    let wall = 0;
    let boundaries = document.querySelectorAll(".boundary");
    turnWalls(boundaries);
}

function turnWalls(boundaries){
    boundaries.forEach(b => {
        b.addEventListener("mouseover", red);
    });
}

function red(){
    this.classList.add("youlose");
    wall++;
}

