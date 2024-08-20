const winnerBox = document.querySelector(".winner-box");
const gotIt = document.getElementById("gotIt");

let count = 1;
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// -----------------------------------change each button background when clicked
function changeBackground(id, index) {
    if (arr[index - 1] === 1) {
        if (count === 1) {
            document.getElementById(id).classList.add("cross");
            count++;
            arr[index - 1] = 0;
        }
        else {
            document.getElementById(id).classList.add("right");
            count--;
            arr[index - 1] = 2;
        }
    }
    winnerCheck();

}

// -------------------------------------checks the winner 
function winnerCheck() {

    // horizontal lines check 
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != 1) {
        if (arr[0] === 0)
            player1Win();
        else
            player2Win();
    }
    else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != 1) {
        if (arr[3] === 0)
            player1Win();
        else
            player2Win();
        console.log(arr);

    }
    else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != 1) {
        if(arr[6]===0)
            player1Win();
        else
            player2Win(); 

    }

    // // vertical lines check 
    else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] != 1) {
        if(arr[0]===0)
            player1Win();
        else
            player2Win(); 

    }
    else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] != 1) {
        if(arr[1]===0)
            player1Win();
        else
            player2Win(); 

    }
    else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != 1) {
        if(arr[2]===0)
        player1Win();
        else
        player2Win(); 

    }


    // // cross axis lines check 
    else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] != 1) {
        if(arr[0]===0)
        player1Win();
        else
        player2Win(); 

    }
    else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] != 1) {
        if(arr[2]===0)
            player1Win();
        else
            player2Win(); 

    }

    // if match is drawn
    else if(arr[0]!=1 && arr[1]!=1 && arr[2]!=1 && arr[3]!=1 && arr[4]!=1 && arr[5]!=1 && arr[6]!=1 && arr[7]!=1 && arr[8]!=1){
            reset();
        
    }

}

// -------------------------------------if the player one wins then this function will execute
function player1Win() {
    winnerBox.style.display = "Block";
    document.querySelector(".winner-box h2").innerHTML = "Player 1";
    document.querySelector(".winner-box img").src = "https://img.icons8.com/ios-glyphs/30/000000/multiply.png";
}
// -------------------------------------if the player two wins then this function will execute
function player2Win() {
    winnerBox.style.display = "Block";
    document.querySelector(".winner-box h2").innerHTML = "Player 2";
    document.querySelector(".winner-box img").src = "https://img.icons8.com/ios-filled/50/000000/circled.png";
}

//-------------------------- if clicked on GOT IT button then this event listener will execute
gotIt.addEventListener("click", () => {
    winnerBox.style.display = "none";
    reset();
    
   
});

// this fuction reset all the style and value (like reload)
function reset() {

    setTimeout(()=>{
        let cell = document.querySelectorAll(".cell");
        for (let i of cell) {
            i.classList.remove("cross");
            i.classList.remove("right");
        }
        for (let elem in arr) {
            arr[elem] = 1;
        }
        count = 1;

    },400);
    
}
