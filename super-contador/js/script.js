window.document.getElementById('btnContar').addEventListener('click', main);
window.document.getElementById('txti').addEventListener('change', loading);
window.document.getElementById('txtf').addEventListener('change', loading);
window.document.getElementById('txtp').addEventListener('change', loading);

function loading() {
    window.document.getElementById('resultado').innerText = `Preparando contagem...`;
}

function main() {
    var resultado = document.getElementById('resultado');
    if (resultado.childElementCount > 0) {
        resultado.removeChild(document.getElementById('paragrafo'));
        control();
    } else {
        control();
    }
}

function control() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    contar(inicio, fim, passo);
}


function contar(inicio, fim, passo) {
    let resultado = document.getElementById('resultado')

    if (validarDados(inicio, fim, passo, resultado) == true) 
    {
        
        resultado.innerText = `Todos os valores recebidos! Iniciando contagem...`;
        
        setTimeout(function () {
            //alert(`Debugging --> [${inicio.value}-${fim.value}-${passo.value}]`);
            resultado.innerHTML="";
            var p;
            
            if (Number(inicio.value) < Number(fim.value)) {
                //Contagem Crescente
                p = contagemCrescente(inicio, fim, passo);
            } else {
                //Contagem Descrecente
                p = contagemRegressiva(inicio, fim, passo);
            }
            resultado.appendChild(p)
        }, 550);
    }else{
        setTimeout(function (){resultado.innerHTML = ""},2000)
        resultado.innerHTML = "Impossivel contar";
        inicio.value="";
        fim.value ="";
        passo.value="";
        
    }

}

function contagemCrescente(inicio, fim, passo) {
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    var paragrafo = document.createElement('p');
    paragrafo.setAttribute('id', 'paragrafo');

    paragrafo.innerText = `Contando: `;
    for (var c = i; c < f; c += p) {
        paragrafo.innerText += `${c} \u{1F449}`;
    }
    paragrafo.innerText += `${c} \u{1F3C1}`;

    return paragrafo;
}


function contagemRegressiva(inicio, fim, passo) {
    let ini = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    var paragrafo = document.createElement('p');
    paragrafo.setAttribute('id', 'paragrafo');

    paragrafo.innerText = `Contando: `;

    for (var i = ini; i > f; i -= p) {
        paragrafo.innerText += `${i} \u{1F449}`;
    }
    paragrafo.innerText += `${i} \u{1F3C1}`;

    return paragrafo;
}


/**
 * Metodo que verifica os dados da foram preenchidos
 * @param {HTMLElement} inicio contém HTMLElement id=txti
 * @param {HTMLElement} fim contém HTMLElement id=txtf
 * @param {HTMLElement} passo contém HTMLElement id=txtp
 * @param {HTMLElement} resultado contém HTMLElement id=resultado
 * @returns true or false
 */
function validarDados(inicio, fim, passo, resultado) {

    if (inicio.value.length == 0) {
        window.alert('[ERRO] Digite o valor de Início');
        return false;
    } else if (fim.value.length == 0) {
        window.alert('[ERRO] Digite o valor de Fim');
        return false;
    }
    else if (passo.value.length == 0) {
        window.alert('[ERRO] Digite o valor de Passo');
        return false;
    }else if(passo.value <= 0){
        window.alert(`[ERRO] Passo Invalido, digite um número maior que ${passo.value}`);
        return false;
    }
    else {
        return true;
    }
}