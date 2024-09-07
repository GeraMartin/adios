function calcularepFcn() {
    presion = parseFloat(document.querySelector("#Presion").value);
    diametro = parseFloat(document.querySelector("#Diametro").value);
    longitud = parseFloat(document.querySelector("#Longitud").value);

   
    /* Materiales */
    material = document.querySelector("#Material").value;
    material = parseFloat(material);
    UTS = 0;
    Ys = 0;
    switch(material) {
        case 1:
            UTS = 415;
            Ys = 230;
        break;
        case 2:
            UTS = 450;
            Ys =275;
        break;
        case 3:
            UTS = 485;
            Ys =275;
        break;
        case 4:
            UTS = 415;
            Ys =220;
        break;
        case 5:
            UTS = 485;
            Ys =260;
        break;
    }

    /* Eficiencia de la junta */

    eficiencia = document.querySelector("#Eficiencia").value;
    eficiencia = parseFloat(eficiencia);
    eta = 0;
    switch(eficiencia) {
        case 1:
            eta = 1;
        break;
        case 2:
            eta = 0.85;
        break;
        case 3:
            eta = 0.75;
        break;
    }

    /* Nivel */
    nivel = document.querySelector("#Nivel").value;
    nivel = parseFloat(nivel);
    rho = document.querySelector("#Densidad").value;
    rho = parseFloat(rho);

    /* Calculos */
    S = Math.min(UTS/3.5,Ys*2/3);

    /* Calculos de las tapas */
    ttapas = (presion*(diametro/2))/(2*S*eta - 0.2*presion);
    ttapas = ttapas / 0.0254;

    /* Calculo del cuerpo */
    tcuerpo = (presion*(diametro))/(S*eta-0.6*presion);
    tcuerpo = tcuerpo /0.0254;

    valuetcuerpo = parseFloat(document.querySelector("#espesorcuerpocomercial").value);
    tcomercuerpo = 0;
    switch(valuetcuerpo){
        case 1:
            tcomercuerpo = 1/8;
        break;
        case 2:
            tcomercuerpo = 1/4;
        break;       
        case 3:
            tcomercuerpo = 3/8;
        break;
        case 4:
            tcomercuerpo = 5/8;
        break;
        case 5:
            tcomercuerpo = 3/4;
        break;
        case 6:
            tcomercuerpo = 7/8;
        break;
        case 7:
            tcomercuerpo = 1;
        break;
        case 8:
            tcomercuerpo = 1 + 1/4;
        break;
        case 9:
            tcomercuerpo = 1 + 1/2;
        break;
        case 10:
            tcomercuerpo = 1 + 3/4;
        break;
        case 11:
            tcomercuerpo = 2;
        break;
    }

    if(tcuerpo > tcomercuerpo){
        document.querySelector("#espesorcuerpo").style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector("#espesorcuerpo").style.color = 'rgb(156,0,6)';
    }
    else {
        document.querySelector("#espesorcuerpo").style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector("#espesorcuerpo").style.color = 'rgb(0,97,0)';
    }
    valuettapas = parseFloat(document.querySelector("#espesortapascomercial").value);
    tcomertapas = 0;
   
    switch(valuettapas){
        case 1:
            tcomertapas = 1/8;
        break;
        case 2:
            tcomertapas = 1/4;
        break;       
        case 3:
            tcomertapas = 3/8;
        break;
        case 4:
            tcomertapas = 5/8;
        break;
        case 5:
            tcomertapas = 3/4;
        break;
        case 6:
            tcomertapas = 7/8;
        break;
        case 7:
            tcomertapas = 1;
        break;
        case 8:
            tcomertapas = 1 + 1/4;
        break;
        case 9:
            tcomertapas = 1 + 1/2;
        break;
        case 10:
            tcomertapas = 1 + 3/4;
        break;
        case 11:
            tcomertapas = 2;
        break;
    }

    if(ttapas > tcomertapas){
        document.querySelector("#espesortapas").style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector("#espesortapas").style.color = 'rgb(156,0,6)';
    }
    else {
        document.querySelector("#espesortapas").style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector("#espesortapas").style.color = 'rgb(0,97,0)';
    }

    document.querySelector("#espesorcuerpo").value = tcuerpo.toFixed(4);
    document.querySelector("#espesortapas").value = ttapas.toFixed(4);

    /*Calculo del peso del equipo */
    Vtapas = (Math.PI/12)*(Math.pow(diametro + tcomertapas*0.0254,3)-Math.pow(diametro,3));
    Vcuerpo =(Math.PI/4)*longitud*(Math.pow(diametro + tcomercuerpo*0.0254,2)-Math.pow(diametro,2));

    VTotal = Vtapas + Vcuerpo;
    pesoVacio = VTotal * 7800;
    document.querySelector('#pesoequipo').value = pesoVacio.toFixed(0);

    /* Calculo del equipo lleno */
    let densidad = document.querySelector('#Densidad').value
    VTliquido = (Math.PI/12)*Math.pow(diametro,3);
    VCliquido = (Math.PI/4)*longitud*Math.pow(diametro,2);
    VTliquido = VTliquido + VCliquido;
    PesoLiquido = VTliquido * densidad;
    document.querySelector('#pesolleno').value = (pesoVacio + PesoLiquido).toFixed(0);

}