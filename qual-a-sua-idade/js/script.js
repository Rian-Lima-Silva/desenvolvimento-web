window.document.querySelector('input[type="button"][value="Verificar"]').addEventListener('click', verificar)




function verificar() {
    var data = new Date();
    /**Ano atual */
    var ano = data.getFullYear();
    /**Ano digitado pelo usuario*/
    var txtAno = document.getElementById('txtAno');
    /**div que receberá a foto */
    var result = document.getElementById('resultado');

    if (validarData(txtAno, ano) == true) 
    {
        verificarIdade(result,ano,txtAno);
    }   
}

function verificarIdade(result,ano,txtAno)
{
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(txtAno.value);
    var genero = validarGenero(fsex);
    var img = document.createElement('img')
    img.setAttribute('id', 'foto');
    img.setAttribute('width', '200px');
    img.setAttribute('height', '200px');

    validarImagem(idade,genero,img);

    result.style.textAlign = 'center';
    result.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    result.appendChild(img);
    return result;
}

function validarData(txtAno, ano) {

    if (txtAno.value.length == 0 || Number(txtAno.value) > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente');
        window.document.getElementById('resultado').innerHTML = 'Preencha os dados acima para ver o resultado';
        return false;
    }
    else {
        return true;
    }
}

function validarGenero(fsex)
{
    if (fsex[0].checked) {
        return 'um Homem';
    } else {
        return 'uma Mulher';
    }
}

function validarImagem(idade,genero,img) {
    if(genero == 'um Homem')
    {
        if (idade >= 0 && idade < 10) {

            return img.setAttribute('src', 'images/man/bebe.png');
        }
        else if (idade < 20) {
            return img.setAttribute('src', 'images/man/jovem.png');
        }
        else if (idade < 50) {
            return img.setAttribute('src', 'images/man/adulto.png');
        }
        else {
            return img.setAttribute('src', 'images/man/idoso.png');
        }
    }else if(genero == 'uma Mulher')
    {
        if (idade >= 0 && idade < 10) {

            return img.setAttribute('src', 'images/woman/bebe.png');
        }
        else if (idade < 20) {
            return img.setAttribute('src', 'images/woman/jovem.png');
        }
        else if (idade < 50) {
            img.setAttribute('width', '200px');
            img.setAttribute('height', '260px');
            return img.setAttribute('src', 'images/woman/adulta.png');
        }
        else {
            return img.setAttribute('src', 'images/woman/idosa.png');
        }
    }
}