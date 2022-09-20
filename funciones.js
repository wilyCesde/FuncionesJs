//Funciones tradicionales
/*function sumar(a,b = 1){
    return a + b;
}
console.log(sumar(23));
console.log(`La sura es: ${sumar(45,34)}`);
//Funciones flecha o anonimas
let fsumar = (a,b = 1) => a + b;
console.log(fsumar(23,89));
//Anonima
let fasumar = function(a,b=1){return a + b};
console.log(fasumar(56,44));

let fiva = (cifra) => cifra * 19/100;
/*if(fiva(100)>15){
    console.log("El valor es mayor a 15")
}
else{
    console.log("EL valor es igual o inferior")
}
console.log(fiva(100)>15 ? "El valor es mayor que 15" : "El valor es igual o inferior");
const faiva = function(cifra){return cifra * 19/100};
console.log(faiva(100)>15 ? "El valor es mayor que 15" : "El valor es igual o inferior");

let mensaje = ()=> "Bienvenid@";
console.log(mensaje());

//Funcion normal fibo
function secuencia(cantnum){
    let a=0;
    let b=1;
    let cadenafibo = a.toString() + "," + b.toString();
    let sumar = 0;
    for(i=2;i<cantnum; i++){
        suma = a + b;
        cadenafibo += "," + suma.toString();
        a = b;
        b = suma;
    }
    return cadenafibo
}
console.log(secuencia(9))

//Funcion con arreglo

function secuencia(cantnum){
    let a=0;
    let b=1;
    let cadenafibo = a.toString() + "," + b.toString();
    let arrfibo = [0,1];
    let suma = 0;
    for(i=2;i<cantnum; i++){
        suma = a + b;
        cadenafibo += "," + suma.toString();
        arrfibo.push(suma);
        a = b;
        b = suma;
    }
    //return cadenafibo
    return arrfibo
}
console.log(secuencia(9))

//Callbacks
function mensaje2(){
    console.log("Hola Mundo")
}

function fcallback(fn){
    fn();
}
//Invocar la funcion fcallback
fcallback(mensaje2);
//Callback con funcion flecha
function fcallback(fn){
    fn();
}
let mensaje3 = (titulo) => console.log(titulo);
fcallback(()=> mensaje3("Bienvenido al sistema"))

//Proceso asincrono
setTimeout(()=>{
    console.log("El servidor ha generado una respuesta ...");
},5000)
console.log("Espere, por favor ...");
console.log("Instruccion 1");

//Callback con arreglos asincronico
let productos = [
    {codigo:"a1", nombre:"Mouse",precio:34000},
    {codigo:"b1", nombre:"Teclado",precio:63000},
    {codigo:"c1", nombre:"Monitor",precio:340000}
]
function listarprods(){
    setTimeout(function(){
        productos.forEach(prod=>{
            console.log(prod.codigo)
            console.log(prod.nombre)
            console.log(prod.precio)
        })
    },3000)
}
listarprods()
console.log("Espere por favor, recuperando los productos ...");
setTimeout(()=>{
    console.log("Productos recuperados correctamente")
},4000)*/

let productos = [
    {codigo:"a1", nombre:"Mouse",precio:34000},
    {codigo:"b1", nombre:"Teclado",precio:63000},
    {codigo:"c1", nombre:"Monitor",precio:340000}
]
function buscarprod(codprod){
    let prod = productos.filter(producto => producto.codigo == codprod);
    return prod.length != 0 ? prod : "Codigo inexistente";
}
console.log(buscarprod("a1"))
