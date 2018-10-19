window.onload = function(){
    let wall = 0;
    let boundaries = document.querySelectorAll(".boundary");
    turnWalls();
    let end = document.getElementById("end");
    endOfGame();
    let start = document.getElementById("start");
    startOfGame();

    function turnWalls(){
        boundaries.forEach(b => {
            b.addEventListener("mouseover", red);
        });
    }

    function red(){
        this.classList.add("youlose");
        wall++;
    }

    function reset(){
        wall = 0;
        boundaries.forEach(b => {
            b.classList.remove("youlose");
        });
    }

    function endOfGame(){
        end.addEventListener("mouseover", status);
    }

    function startOfGame(){
        start.addEventListener("click", reset);
    }

    function status(){
        if(wall == 0){
            window.alert("You win! Play again?");
        }
    }
}