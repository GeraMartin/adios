function calcularIMC() {
    peso = parseFloat(document.querySelector("#peso").value);
    altura = parseFloat(document.querySelector("#altura").value);
    
    let colorFondo ='';
    let estado ='';

    imc = (peso)/Math.pow(altura,2);

    switch(true) {
        case imc < 18.5:
            colorFondo = '#FF0017';
            estado = 'Desnutrido';
        break;
        case imc >= 18.5 && imc < 25:
            colorFondo = '#00FE52';
            estado = 'Normal';
        break;
        case imc >= 25 && imc < 30:
            colorFondo = '#FFFD56';
            estado = 'Sobrepeso';
        break;
        case imc >= 30 && imc < 35:
            colorFondo = '#FF0017';
            estado = 'Obesidad grado 1';
        break;
        case imc >= 35 && imc < 40:
            colorFondo = '#FF0017';
            estado = 'Obesidad grado 2';
        break;
        case imc >= 40:
            colorFondo = '#FF0017';
            estado = 'Obesidad grado 3';
        break;
    }

    document.querySelector('#estado').value = estado;
    document.querySelector("#estado").style.backgroundColor = colorFondo;
    document.querySelector("#estado").style.color = '#000000';

    document.querySelector('#IMC').value = imc.toFixed(1);
    document.querySelector("#IMC").style.backgroundColor = colorFondo;
    document.querySelector("#IMC").style.color = '#000000';

}
