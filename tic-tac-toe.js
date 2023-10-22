document.addEventListener("DOMContentLoaded", function() {
    // style the squares
    boardDiv=document.getElementById("board")
    squareDivs=boardDiv.querySelectorAll("div")

    // for each div set it as a square
    squareDivs.forEach(squareDivs =>{
        squareDivs.setAttribute("class", "square")
    })
});
