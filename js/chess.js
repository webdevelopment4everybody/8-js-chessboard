"use strict";

// const board = null;reiskme, kuri neturi paskirties, placeholderis objektas
const board = document.querySelector('.board');
const rowsCount = 4;
const columnsCount = 4;
const firstColor = '#fff';
const secondColor = '#000';
let color = '';

let HTML = '';
board.innerHTML = HTML;

for(let y=1; y<=rowsCount; y++){ 
    HTML += `<div class="row"
                style="height:calc(100% / ${rowsCount});">`;
    for(let x=1; x<=columnsCount; x++){
        if( (x+y)%2 ===0) {
            color = firstColor;
        }else{
            color = secondColor;
        }

       HTML += `<div class="cell"
                    style = "background-color: ${color};
                            width: calc(100% / ${columnsCount});">
                </div>`;
    }
    HTML += `</div>`;
    board.innerHTML = HTML;
}


