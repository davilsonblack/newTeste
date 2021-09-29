var ativarMenu = false;

function clicar(){
    ativarMenu = !ativarMenu;
    var nav = document.getElementById("nav")

    if(ativarMenu){
        nav.style.display = 'block';
        nav.style.display = 'flex';
        nav.style.alignItems = 'center';
    }else{
        nav.style.display = 'none';
    }
}