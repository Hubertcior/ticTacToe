const fields = document.querySelectorAll('.square');

let flag = true;
let canPlay = true;
let table = [0,0,0,
                   0,0,0,
                   0,0,0];

const checkRow = () =>{
    if(table[0] === 1 && table[1] === 1 && table[2] === 1 || table[3] === 1 && table[4] === 1 && table[5] === 1 || table[6] === 1 && table[7] === 1 && table[8] === 1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "X win";
    }
    else if(table[0] === 2 && table[1] === 2 && table[2] === 2 || table[3] === 2 && table[4] === 2 && table[5] === 2 || table[6] === 2 && table[7] === 2 && table[8] === 2){
        document.querySelector('h1').innerHTML= "O win";
        canPlay = !canPlay;
    }
}

const checkColumn = () =>{
    if(table[0] === 1 && table[3] === 1 && table[6] === 1 || table[1] === 1 && table[4] === 1 && table[7] === 1 || table[2] === 1 && table[5] === 1 && table[8] === 1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "X win";
    }
    else if(table[0] === 2 && table[3] === 2 && table[6] === 2 || table[1] === 2 && table[4] === 2 && table[7] === 2 || table[2] === 2 && table[5] === 2 && table[8] === 2){
        document.querySelector('h1').innerHTML= "O win";
        canPlay = !canPlay;
    }
}

const checkBias = () =>{
    if(table[0] === 1 && table[4] === 1 && table[8] === 1 || table[2] === 1 && table[4] === 1 && table[6] === 1){
        canPlay = !canPlay;
        document.querySelector('h1').innerHTML= "X win";
    }
    else if(table[0] === 2 && table[4] === 2 && table[8] === 2 || table[2] === 2 && table[4] === 2 && table[6] === 2){
        document.querySelector('h1').innerHTML= "O win";
        canPlay = !canPlay;
    }
}

const checkDraw = () =>{
    if(table[0] != 0 && table[1] != 0 && table[2] != 0 && table[3] != 0 && table[4] != 0 && table[5] != 0 && table[6] != 0 && table[7] != 0 && table[8] != 0){
        document.querySelector('h1').innerHTML= "Draw";
        canPlay = !canPlay;
    }
}

const clearingImg = () =>{
    fields.forEach(field =>{
        if(field.childNodes[0] != undefined){
        field.removeChild(field.childNodes[0]);
        }
    })
}

const clearingTable = () =>{
    for(let i = 0; i<table.length; i++){
        table[i] = 0;
    }
}

const clearingValue = () =>{
    flag = true;
    canPlay = true;
    document.querySelector('h1').innerHTML= "";
    document.querySelector('h2').innerHTML= "";
}

const restart = () =>{
    clearingImg();
    clearingTable();
    clearingValue();
}


fields.forEach( element => {
    element.addEventListener('click', ()=>{
        if(table[element.attributes[0].value]===0){
        if(flag && canPlay){
        const text = document.createElement('h1');
        text.innerHTML = "X";
        text.style.fontSize = "80px";
        text.style.color = "red";
        element.appendChild(text);
        flag = !flag;
        table[element.attributes[0].value] =1;
        console.log(element.attributes[0].value);
        checkDraw();
        checkRow();
        checkColumn();
        checkBias();
        document.querySelector('h2').innerHTML= "";
        }
        else if(!flag && canPlay){
        const text = document.createElement('h1');
        text.innerHTML = "O"
        text.style.fontSize = "80px";
        text.style.color = "green";
        element.appendChild(text);
        flag = !flag;
        table[element.attributes[0].value] =2;
        console.log(element.attributes[0].value);
        checkDraw();
        checkRow();
        checkColumn();
        checkBias();
        document.querySelector('h2').innerHTML= "";
        }
    }
    else{
        document.querySelector('h2').innerHTML= "wybierz dobre pole!";
    }
    });
})


document.querySelector('button').addEventListener('click', restart)


