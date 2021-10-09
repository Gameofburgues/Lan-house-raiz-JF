valorInicial = 0;

function calcular() {
    /* INICIO HORA */
    
    if(document.formulario.hora[0].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.hora[1].checked) {
        valorInicial += 20;
    }

    else if(document.formulario.hora[2].checked) {
        valorInicial += 30;
    }

    else if(document.formulario.hora[3].checked) {
        valorInicial += 40;
    }

    else if(document.formulario.hora[4].checked) {
        valorInicial += 50;
    }

    /* FIM HORA */

    /* INICIO PORCAO */
    if(document.formulario.porcao[0].checked) {
        valorInicial += 30;
    }

    else if(document.formulario.porcao[1].checked) {
        valorInicial += 40;
    }

    else if(document.formulario.porcao[2].checked) {
        valorInicial += 60;
    }

    else if(document.formulario.porcao[3].checked) {
        valorInicial += 15;
    }

    else if(document.formulario.porcao[4].checked) {
        valorInicial += 35;
    }
    /* FIM PORCAO */

     /* INICIO PRECOS */
     if(document.formulario.precos[0].checked) {
        valorInicial += 5;
    }

    else if(document.formulario.precos[1].checked) {
        valorInicial += 1;
    }

    else if(document.formulario.precos[2].checked) {
        valorInicial += 1;
    }

    else if(document.formulario.precos[3].checked) {
        valorInicial += 2;
    }

    else if(document.formulario.precos[4].checked) {
        valorInicial += 0.50;
    }
    /* FIM PRECOS */

     /* INICIO CERVEJA */
     if(document.formulario.cerveja[0].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.cerveja[1].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.cerveja[2].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.cerveja[3].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.cerveja[4].checked) {
        valorInicial += 10;
    }
    /* FIM CERVEJA */

     /* INICIO PESSOA */
     if(document.formulario.pessoa[0].checked) {
        valorInicial += 10;
    }

    else if(document.formulario.pessoa[1].checked) {
        valorInicial += 4;
    }

    else if(document.formulario.pessoa[2].checked) {
        valorInicial += 4;
    }

    else if(document.formulario.pessoa[3].checked) {
        valorInicial += 8;
    }

    else if(document.formulario.pessoa[4].checked) {
        valorInicial += 6;
    }
    /* FIM PESSOA */

    localStorage.setItem('valorFinal', parseFloat(valorInicial));
}

function resultado() {
    document.querySelector('#mostrar').value = parseFloat(localStorage.getItem('valorFinal'));
}