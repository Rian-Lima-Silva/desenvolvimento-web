window.document.body.onload = carregar;

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora=data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora>=0 && hora<12){
        //BOM DIA
        img.src = 'images/day/manha-250.jpg';
        document.body.style.background = '#dbb162';
        
    }
    else if(hora >=12 && hora<=18){
        //BOA TARDE
        img.src = 'images/day/tarde-250.jpg';
        document.body.style.background = '#945e5e';

    }else{
        //BOA NOITE
        img.src = 'images/day/noite-250.jpg';
        document.body.style.background = '#906996';
    }
}

