let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let deccountEl = document.getElementById("deccount-el");



let count = 0;

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    // Change this to use the minus equal technique you've learned
    count -= 1;
    deccountEl.innerText = count;
}



function save() {
    let savedStr = count + " ~ ";
    // =================innerText cant see non readable for humans like spaces - use textContent
    // saveEl.innerText += countStr;
    saveEl.textContent += savedStr;
    countEl.textContent = count;
    deccountEl.textContent = count;
    count = 0;
    
}

function clearResult(){
    document.getElementById("count-el").countEl = 0;
    document.getElementById("deccount-el").deccountEl = 0;
  }











