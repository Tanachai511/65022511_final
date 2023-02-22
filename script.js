function selectedMenu(){
    const selected = document.getElementById('menu')
    const selectedTxt = document.getElementById('selected');

    choose = selected.value
    selectedTxt.innerText = choose;
}