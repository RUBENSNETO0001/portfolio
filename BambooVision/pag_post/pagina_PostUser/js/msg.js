document.querySelector("#iframe").addEventListener("fullscreenchange", function(){
    for(let i = 0; i < 1000;i++){
        i += 1;
    }
    if(i != 1001){
        document.getElementById("textBemvindo").innerHTML = "Seja Bem-Vindo ao BambooVision!!";
    }
    else{
        alert("Seja Bem-Vindo ao BambooVision!!");
    }
})