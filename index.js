let obj = {
    encendido: false,
    volumen: 3,
    canal: 7,
    mudo: false
}
const ERROR_APAGADA = "La televisión está apagada";
const ERROR_VOLUMEN_MAXIMO = "Volumen al máximo";
const ERROR_VOLUMEN_MINIMO = "Volumen al minimo";
const ERROR_CANAL_MAXIMO = "No hay más canales";
const ERROR_CANAL_MINIMO = "No hay menos canales";

const cambiarEncendido =()=>{
    obj.encendido = !obj.encendido;
    if(!obj.encendido){
        imprimirObjeto();
        obj = {
            encendido: false,
            volumen: 3,
            canal: 7,
            mudo: false
        }
        return;
    }
    imprimirObjeto();
}

const subirVolumen = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }

    if(obj.mudo){
        obj.mudo = false;
        imprimirObjeto();
        return;
    }
    if(obj.volumen == 10){
        console.log(ERROR_VOLUMEN_MAXIMO);
        return;
    }

    obj.volumen++;
    imprimirObjeto();
}

const bajarVolumen = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }
    if(obj.mudo){
        obj.mudo = false;
        imprimirObjeto();
        return;
    }
    if(obj.volumen == 1){
        console.log(ERROR_VOLUMEN_MINIMO);
        return;
    }

    obj.volumen--;
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
    imprimirObjeto();
}

const silenciar = ()=>{
    if(!obj.encendido){
        console.log(ERROR_APAGADA);
        return;
    }
    obj.mudo = !obj.mudo;
    imprimirObjeto();
}

const imprimirObjeto = ()=>{
    console.log(obj);
}