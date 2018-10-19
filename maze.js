window.onload = function(){
    let wall = 0;
    let boundaries = document.querySelectorAll(".boundary");
    turnWalls();
    let end = document.getElementById("end");
    endOfGame();

    function turnWalls(){
        boundaries.forEach(b => {
            b.addEventListener("mouseover", red);
        });
    }

    function red(){
        this.classList.add("youlose");
        wall++;
    }

    function endOfGame(){
        end.addEventListener("mouseover", status);
    }

    function status(){
        if(wall == 0){
            window.alert("You win! Play again?");
        }
    }
}