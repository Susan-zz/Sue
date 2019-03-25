console.log('success');
function selectOption(){
    var id = document.getElementById('mySelect');
    var name = id.options[id.selectedIndex].value;
    console.log(name);
}