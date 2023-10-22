document.addEventListener("DOMContentLoaded", function() {
    // style the squares
    boardDiv=document.getElementById("board")
    squareDivs=boardDiv.querySelectorAll("div")

    
    // for each div set it as a square
    squareDivs.forEach(squareDivs =>{
        squareDivs.setAttribute("class", "square")
    })
    
    // game state for keeping track of plays
    state=["","","","","","","","",""]
    let X=true    
    
    sqs=boardDiv.querySelectorAll(".square");
    sqs.forEach((sq,index) =>{
        sq.addEventListener("click",()=>{
            if (state[index]===""){
                if (X){
                    sq.textContent="X"
                    sq.classList.add("square.X")
                    state[index]="X"
                    X=!X
                }
                else{
                    sq.textContent="O"
                    sq.classList.add("square.O")
                    state[index]="O"
                    X=!X
                }
            }

        })
    })
});
