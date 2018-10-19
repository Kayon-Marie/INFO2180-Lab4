window.onload = function(){
    document.getElementById("boundary1").addEventListener("mouseover", red);
}

function red(){
    this.classList.add("youlose");
}
