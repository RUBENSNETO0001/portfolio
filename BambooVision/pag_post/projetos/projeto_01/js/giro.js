document.getElementById("button").addEventListener("click", function(){
    
    let random = Math.floor(Math.random() * 6);

    if(random == 1){
        document.getElementById("imgDadod").src="assents/main/dado1.jpeg";
        document.getElementById("number").innerHTML="o resultado é 1";
    }
    else if(random == 2){
        document.getElementById("imgDadod").src="assents/main/dado2.jpeg";
        document.getElementById("number").innerHTML="o resultado é 2";
    }
    else if(random == 3){
        document.getElementById("imgDadod").src="assents/main/dado3.jpeg";
        document.getElementById("number").innerHTML="o resultado é 3";
    }
    else if(random == 4){
        document.getElementById("imgDadod").src="assents/main/dado4.jpeg";
        document.getElementById("number").innerHTML="o resultado é 4";
    }
    else if(random == 5){
        document.getElementById("imgDadod").src="assents/main/dado5.jpeg";
        document.getElementById("number").innerHTML="o resultado é 5";
    }
    else if(random == 6){
        document.getElementById("imgDadod").src="assents/main/dado6.jpeg";
        document.getElementById("number").innerHTML="o resultado é 6";
    }
    else{
        document.getElementById("imgDadod").src="assents/header/dados-removebg-preview.png";
        document.getElementById("number").innerHTML="Jogada nula";
    }
})