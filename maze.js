window.onload = function(){
    let wall = 0;
    let endGame = false;
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    let message = document.getElementById("status");
    let maze = document.getElementById("maze");

    let original = message.innerHTML;

    turnWalls();
    startOfGame();
    endOfGame();
    cheat();

    function turnWalls(){
        boundaries.forEach(b => {
            b.addEventListener('mouseover', red);
        });
    }

    function red(){
        this.classList.add("youlose");
        wall++;
    }

    function makeAllRed() {
        if(endGame===false){
            boundaries.forEach(b => {
                b.classList.add("youlose");
                wall++;
            });
            status();
        }
    }

    function reset(){
        wall = 0;
        endGame = false;
        message.innerHTML = original;
        boundaries.forEach(b => {
            b.classList.remove("youlose");
        });
    }

    function endOfGame(){
        end.addEventListener("mouseover", gameEnd);
    }

    function gameEnd(){
        endGame = true;
        status();
    }

    function startOfGame(){
        start.addEventListener("click", reset);
    }

    function status(){
        if(wall > 0 && endGame){
            message.innerHTML = "You lose! Try again?";
        }
        else{
            if(wall === 0 && endGame){
                message.innerHTML = "You win! Play again?";
            }
            else{
                if(wall > 0 && endGame === false){
                    message.innerHTML = "You cheated!";
                }
            }
        }
    }

    function cheat(){
        maze.addEventListener("mouseleave", makeAllRed);
    }
}