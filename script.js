const table = document.getElementById('table')

function text_change(val){
    const TB = document.getElementById('Name').value;
    console.log(TB);
    table.innerText =TB;
}

function selectedMenu(){
    const selected = document.getElementById('menu')
    const selectedTxt = document.getElementById('selected');

    choose = selected.value
    selectedTxt.innerText = choose;
}