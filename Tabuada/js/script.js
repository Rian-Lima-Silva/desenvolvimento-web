window.document.querySelector('#btnGerarTabuada').addEventListener('click', gerarTabuada);

function gerarTabuada() {
    var txt = document.getElementById('txtNumero');
    var res = document.getElementById('resultado');
    res.innerHTML = "";

    if (txt.value.length == 0) {
        window.alert('Por favor, Digite um numero');
    }
    else {
        var num = Number(txt.value);
        var c = 1;
        /**ComboBox*/
        var cbx;
        if (num <= 10) {
            cbx = CreateTagSelect(10);
            while (c <= 10) {
                var item = CreateTagOption(c);
                item.text = `${num} x ${c} = ${num * c}`;
                cbx.appendChild(item);
                c++;
            }
        } else {
            cbx = CreateTagSelect(num);
            while (c <= num) {

                var item = CreateTagOption(c);
                item.text = `${num} x ${c} = ${num * c}`;
                cbx.appendChild(item);
                c++;
            }
        }
        res.appendChild(cbx);
    }
}

function CreateTagSelect(size) {

    var select = document.createElement('select');
    select.setAttribute('id', 'cbxTabuada');
    select.setAttribute('name', 'cbxTabuada');
    select.setAttribute('size', size);
    return select;
}

function CreateTagOption(valor) {
    var option = document.createElement('option');
    option.setAttribute('value', `tab${valor}`);
    return option;
}