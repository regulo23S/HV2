let visible = false;

function clickMenu(){
    if(visible){
        document.getElementById("op").classList ="";
        visible = false;
    }else{
        document.getElementById("op").classList ="menu";
        visible = true;
    }
}

function subMenu(){
    document.getElementById("op").classList = "";
    visible = false;
}