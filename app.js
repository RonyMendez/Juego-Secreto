let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;
function AsignarTextoElemento(elemento, texto){
    let elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (NumeroDeUsuario === numeroSecreto){
        AsignarTextoElemento('p',`Acertaste el número en: ${intentos} ${(intentos === 1)? 'sólo intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //EL USUARIO NO ACERTO

        if (NumeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','El número es Menor');
        } else {
            AsignarTextoElemento('p','El número es Mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}
function limpiarCaja (){
    document.querySelector('#ValorUsuario').value = '';
}
function GenerarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya salieron todos los numeros entonces:
    if(listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{ 
    //Si el número generado está incluido en la lista, hacemos algo, si no hacemos otra cosa
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return GenerarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
    AsignarTextoElemento('h1','Juego del número secreto');
    AsignarTextoElemento('p',`Escoge un número entre el 1 el ${numeroMaximo}.`) 
    numeroSecreto = GenerarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //1. Limpiar la caja.
    limpiarCaja();
    //2. Indicar mensaje de instrucciones.
    //3. Generar un nuevo numero aleatorio.
    //4. Reinicializar el número de intentos.
    condicionesIniciales();
    //5. Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();






/*function HolaMundo(){
    console.log("Hola Mundo");
}
HolaMundo();

function Holax(nombre){
    console.log(`Hola ${nombre}.`);
}
Holax("Rony");
Holax("Mónica");

function double(numero){
    console.log(numero*2);
}

double(6);*/




/* CREA UNA FUNCION QUE MUESTRE EN PANTALLA LA TABLA DE MULTIPLICAR DE UN NUMERO RECIBIDO COMO PARAMETRO.
function escalon (base, tabla){
    let multiplicador = 1;
    while (multiplicador <= tabla){
        resultado = base * multiplicador;
        console.log(`${base} x ${multiplicador} = ${resultado}.`);
        multiplicador++;
    }
    

}

escalon('10','20');*/

/*let listaGenerica = [''] ;
let listaNumerica = ['60','60','60','60','100'];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
function mostrarElementos(){
    console.log(lenguajesDeProgramacion);
}
mostrarElementos();
function mostrarElementosInversos(){
    let total=lenguajesDeProgramacion.length;
    while (total >= 1){
        console.log(lenguajesDeProgramacion[total-1]);
        total--;
    }
}

mostrarElementosInversos();

function promedioDeElementos(){
    let num = 0;
    let sum=0;
    while (num<listaNumerica.length){
        sum = sum+parseInt(listaNumerica[num]);
        num++;
    }
    console.log(`El promedio es: ${sum/num}`)
}
promedioDeElementos();*/