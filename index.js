let obj = {
    encendido: false,
    volumen: 3,
    canal: 7,
    mudo: false
}
let volumenMudo = 3;

const ERROR_APAGADA = "La televisión está apagada";
const ERROR_VOLUMEN_MAXIMO = "Volumen al máximo";
const ERROR_VOLUMEN_MINIMO = "Volumen al minimo";
const ERROR_CANAL_MAXIMO = "No hay más canales";
const ERROR_CANAL_MINIMO = "No hay menos canales";

const cambiarEncendido =()=>{
    let div = document.getElementById("btnEncendido");

    obj.encendido = !obj.encendido;
    if(!obj.encendido){
        document.getElementById("btnVolumenMas").className = "btn btn-primary disabled";
        document.getElementById("btnVolumenMenos").className = "btn btn-primary disabled";
        document.getElementById("btnCanalMas").className = "btn btn-primary disabled";
        document.getElementById("btnCanalMenos").className = "btn btn-primary disabled";
        document.getElementById("btnSilenciar").className = "btn btn-primary disabled";
        $("#canal").text("");
        $("#volumen").text("");
        $("#alerta").text("");
        div.className = "btn btn-danger";
        imprimirObjeto();
        obj = {
            encendido: false,
            volumen: 3,
            canal: 7,
            mudo: false
        }

        return;
    }

    document.getElementById("btnVolumenMas").className = "btn btn-primary";
    document.getElementById("btnVolumenMenos").className = "btn btn-primary";
    document.getElementById("btnCanalMas").className = "btn btn-primary";
    document.getElementById("btnCanalMenos").className = "btn btn-primary";
    document.getElementById("btnSilenciar").className = "btn btn-primary";
    div.className = "btn btn-success";
    imprimirObjeto();
    $("#canal").text(`Canal: ${obj.canal}`);
    $("#volumen").text(`Volumen: ${obj.volumen}`);
}

const subirVolumen = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }

    if(obj.mudo){
        obj.volumen = volumenMudo;
        obj.mudo = false;
        imprimirObjeto();
        $("#alerta").text(``);
        $("#volumen").text(`Volumen: ${obj.volumen}`);
        return;
    }
    if(obj.volumen == 10){
        console.log(ERROR_VOLUMEN_MAXIMO);
        return;
    }

    obj.volumen++;
    $("#volumen").text(`Volumen: ${obj.volumen}`);
    imprimirObjeto();
}

const bajarVolumen = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }
    if(obj.mudo){
        obj.volumen = volumenMudo;
        obj.mudo = false;
        imprimirObjeto();
        $("#alerta").text(``);
        $("#volumen").text(`Volumen: ${obj.volumen}`);
        return;
    }
    if(obj.volumen == 1){
        console.log(ERROR_VOLUMEN_MINIMO);
        return;
    }

    obj.volumen--;
    $("#volumen").text(`Volumen: ${obj.volumen}`);
    imprimirObjeto();
}

const subirCanal = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }
    if(obj.canal == 100){
        console.log(ERROR_CANAL_MAXIMO);
        return;
    }

    obj.canal++;
    $("#canal").text(`Canal: ${obj.canal}`);
    imprimirObjeto();
}

const bajarCanal = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }

    if(obj.canal == 1){
        console.log(ERROR_CANAL_MINIMO);
        return;
    }

    obj.canal--;
    $("#canal").text(`Canal: ${obj.canal}`);
    imprimirObjeto();
}

const silenciar = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }
    obj.mudo = !obj.mudo;

    if(obj.mudo){
        volumenMudo = obj.volumen;
        obj.volumen = 0;
        $("#volumen").text(`Volumen: 0`);
        $("#alerta").text(`El sonido está silenciado`);
    }else{
        obj.volumen = volumenMudo;
        $("#alerta").text(``);
        $("#volumen").text(`Volumen: ${obj.volumen}`);
    }
    
    imprimirObjeto();
}

const imprimirObjeto = ()=>{
    console.log("-------------------------------")
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
    console.log("-------------------------------")
}