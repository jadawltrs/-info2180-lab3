document.addEventListener("DOMContentLoaded", function() {

    // style the squares
    let boardDiv=document.getElementById("board")
    let squareDivs=boardDiv.querySelectorAll("div")

    
    // for each div set it as a square
    squareDivs.forEach(sqDivs =>{
        sqDivs.setAttribute("class", "square")
    })
    
    // game state for keeping track of plays
    state=["","","","","","","","",""]
    let X=true    
    let gameover=false

    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    //playing the game
    let sqs=boardDiv.querySelectorAll(".square");   //selects all square classes
    sqs.forEach((sq,index) =>{                  
        sq.addEventListener("click",()=>{
            if (state[index]==="" && gameover==false){
                if (X){
                    sq.textContent="X"
                    sq.classList.add("square.X")
                    state[index]="X"
                    if (checkWin(state,"X")){
                        statusDiv=document.getElementById("status")
                        statusDiv.textContent="Congratulations! X is the Winner!"
                        statusDiv.classList.add("you-won")
                        gameover=true
                    }
                    
                }
                else{
                    sq.textContent="O"
                    sq.classList.add("square.O")
                    state[index]="O"
                    checkWin(state,"O")
                    if (checkWin(state,"O")){
                        statusDiv=document.getElementById("status")
                        statusDiv.textContent="Congratulations! O is the Winner!"
                        statusDiv.classList.add("you-won")
                        gameover=true
                    }
                }
                X=!X

            }
        })

        // enable hover
        sq.addEventListener("mouseenter",()=>{
            sq.classList.add("hover")
        })
        sq.addEventListener("mouseleave",()=>{
            sq.classList.remove("hover")
        })

        let newGame=document.querySelector("button")
        newGame.addEventListener("click",()=>{
            state=["","","","","","","","",""]
            gameover=false
            statusDiv.classList.remove("you-won")
            statusDiv.textContent="Move your mouse over a square and click to play an X or an O."

            sqs.forEach((sq)=>{
                sq.textContent=""
            })
            
        })
    })

    

    // function to check if someone won
    function checkWin(state, player) {
        for (const combo of wins) {
            const [a, b, c] = combo;
            if (state[a] === player && state[b] === player && state[c] === player) {
                return true;
            }
        }
        return false;
    }
});
