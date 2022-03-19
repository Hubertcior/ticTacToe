const fields = document.querySelectorAll('.square');
let changePlayer = true;
let canPlay = true;
let tableX= [0,0,0,
                   0,0,0,
                   0,0,0];
let tableO= [0,0,0,
                   0,0,0,
                   0,0,0];
let games = 0;
let oWins= 0;
let xWins= 0;
let draws= 0;
let moves = 0;

const checkXWin = () => {
    for(let i = 0;i<tableX.length;i+=3){
        if(tableX[i] ==1 && tableX[i+1] == 1 && tableX[i+2] ==1){
            canPlay = !canPlay;
            document.querySelector('h1').innerHTML= "X Win";
            games++;
            xWins++;
        }
    }
    for(let i = 0;i<3;i++){
        if(tableX[i] ==1 && tableX[i+3] == 1 && tableX[i+6] ==1){
            canPlay = !canPlay;
            document.querySelector('h1').innerHTML= "X Win";
            games++;
            xWins++;
        }
    }
    if(tableX[0] ==1 && tableX[4] == 1 && tableX[8] ==1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "X Win";
        games++;
        xWins++;
    }

    if(tableX[2] ==1 && tableX[4] == 1 && tableX[6] ==1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "X Win";
        games++;
        xWins++;
    }

    if(moves === 9){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "Draw";
        games++;
        draws++;
    }
}

const checkOWin = () => {
    for(let i = 0;i<tableO.length;i+=3){
        if(tableO[i] ==1 && tableO[i+1] == 1 && tableO[i+2] ==1){
            canPlay = !canPlay;
            document.querySelector('h1').innerHTML= "O Win";
            games++;
            oWins++;
        }
    }
    for(let i = 0;i<3;i++){
        if(tableO[i] ==1 && tableO[i+3] == 1 && tableO[i+6] ==1){
            canPlay = !canPlay;
            document.querySelector('h1').innerHTML= "O Win";
            games++;
            oWins++;
        }
    }
    if(tableO[0] ==1 && tableO[4] == 1 && tableO[8] ==1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "O Win";
        games++;
        oWins++;
    }

    if(tableO[2] ==1 && tableO[4] == 1 && tableO[6] ==1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "O Win";
        games++;
        oWins++;
    }
    if(moves === 9){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "Draw";
        games++;
        draws++;
    }
}

const clearImg = () =>{
    fields.forEach(field =>{
        if(field.childNodes[0] != undefined){
        field.removeChild(field.childNodes[0]);
        }
    })
}

const clearTables = () =>{
    for(let i = 0; i<tableX.length; i++){
        tableX[i] = 0;
    }
    for(let i = 0; i<tableO.length; i++){
        tableO[i] = 0;
    }
}

const clearValue = () =>{
    changePlayer = true;
    canPlay = true;
    moves = 0;
    document.querySelector('h1').innerHTML= "";
    document.querySelector('h2').innerHTML= "";
}

const restart = () =>{
    clearTables();
    clearValue();
    clearImg();
    statsUpdate();
}

const statsUpdate = () =>{
    document.querySelector('#games').innerHTML = games;
    document.querySelector('#Owins').innerHTML = oWins;
    document.querySelector('#Xwins').innerHTML = xWins;
    document.querySelector('#draws').innerHTML = draws;
}


statsUpdate();

fields.forEach( element => {
    element.addEventListener('click', ()=>{
        if(tableX[element.attributes[0].value]===0 && tableO[element.attributes[0].value]===0){
        if(changePlayer && canPlay){
        const text = document.createElement('h1');
        text.innerHTML = "X";
        text.style.fontSize = "80px";
        text.style.color = "red";
        element.appendChild(text);
        changePlayer = !changePlayer;
        tableX[element.attributes[0].value] =1;
        document.querySelector('h2').innerHTML= "";
        console.table(tableX);
        moves++;
        checkXWin();
        }
        else if(!changePlayer && canPlay){
        const text = document.createElement('h1');
        text.innerHTML = "O"
        text.style.fontSize = "80px";
        text.style.color = "green";
        element.appendChild(text);
        changePlayer = !changePlayer;
        tableO[element.attributes[0].value] =1;
        document.querySelector('h2').innerHTML= "";
        console.table(tableO);
        moves++;
        checkOWin();
        }
    }
    else if(canPlay){
        document.querySelector('h2').innerHTML= "wybierz dobre pole!";
    }
    });
})


document.querySelector('button').addEventListener('click', restart)


