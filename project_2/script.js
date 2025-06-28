

// loding screen
 let progress = 0;
        const progressBar = document.getElementById('progress-bar');
        const interval = setInterval(function() {
            progress += Math.random() * 10;
            if(progress >= 100) {
                progress = 100;
                clearInterval(interval);
                document.querySelector('.loading-screen').style.opacity = '0';
                setTimeout(function() {
                    document.querySelector('.loading-screen').style.display = 'none';
                }, 500);
            }
            progressBar.style.width = progress + '%';
        }, 300);
// logic build program
let valid = true;
let currentNumber = null;

function restartGame() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    let min = 10;
    let max = 13;
    currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Current number:", currentNumber); 
    

    valid = true;
}

function checkGuess(winningNumber) {
    if (!valid) return;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 
    
    const div = document.createElement('div');
    div.className = "result";
    
    if (currentNumber ===11 ) {
        if(currentNumber===winningNumber)
        {
            div.innerHTML = "YOU DROW 	&#128511;" ;
        }
        else if(winningNumber===12)
        {
            div.innerHTML = "YOU WIN &#128512;";
        }
        else{
            div.innerHTML = "YOU LOSE &#128512;";
        }

    //     div.innerHTML = "YOU DROW &#128512;";
    // } else if(currentNumber===winningNumber+1) {
    //     div.innerHTML = "YOU LOSE &#128514;";
    }
    else if (currentNumber===12)
    {
        if(currentNumber===winningNumber)
        {
            div.innerHTML = "YOU DROW 	&#128511;" ;
        }
        else if(winningNumber===13)
        {
            div.innerHTML = "YOU WIN &#128512;";
        }
        else{
            div.innerHTML = "YOU LOSE &#128512;";
        }

    }
    else
    {
        if(currentNumber===winningNumber)
        {
            div.innerHTML = "YOU DROW 	&#128511;" ;
        }
        else if(winningNumber===11)
        {
            div.innerHTML = "YOU WIN &#128512;";
        }
        else{
            div.innerHTML = "YOU LOSE &#128512;";
        }
    }
    
    resultDiv.appendChild(div);
    valid = false;
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('btn_1').addEventListener('click', function() {
        checkGuess(11);
    });
    
    document.getElementById('btn_2').addEventListener('click', function() {
        checkGuess(12);
    });
    
    document.getElementById('btn_3').addEventListener('click', function() {
        checkGuess(13);
    });
    

    document.getElementById('btn_4').addEventListener('click', function() {
        restartGame();
    });
    
    
    restartGame();
});

// add responsive
/* Add this JavaScript for scroll effect */

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });