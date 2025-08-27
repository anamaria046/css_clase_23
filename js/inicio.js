console.log('Hola desde js'); /*Muestra mensaje por consola*/
console.error('ok.2'); /*Indica errores por consola*/
/*´¨concatena variables dentro del string , igual las comillas dobles o solo la coma arriba*/
/**
 * Bloque
 */
// linea
/**
 * VARIABLES: var(palabras reservadas para definir variables), let, const (para modernas palabras reservadas para definir variables)
 * const(una vez asignado el valor no cambia, es una constante, no se puede volver a cambiar su valor)
 * let (crear variables que luego se puden cambiar su valor )
 */
//Cuando se asigna el tipo de dato si es necesario colocar su tipo
let nombre="Pepe";
let apellido ="Perez"

const nombreCompleto=`${nombre} ${apellido}`; // el ${} concatenan 
//nombreCompleto = nombre+ ' '+ apellido;
alert(nombreCompleto);

let edad=12;
let salario=12.5;
let mayorEdad=true; //false
let a =null;
let b= undefined; // variable que no tiene un valor exacto
console.log(apellido);
let numeros=[]; // manera de crear array son tamaño indefinido
numeros = new Array (12); // manera de crear array con un posible tamaño definido 
numeros =[1,2,3,4,5,6,7,8,9,10]; //crea el array y define los elementos
let otro=['asdf',12,12.5,true,[1,2,3],null];
//objetos con claves y valores 
let persona={
nombre:'Ana',
apellido:'Gomez',
edad:30,
mayorEdad: true,
jobs:[]
};
console.log(numeros[1]); // busca la posición en el array
console.log(persona.nombre, persona.apellido); // busca en el objeto 
persona.nombre='Ana Maria';
console.log(persona.nombre,persona.apellido);
//recorrer numeros y 
console.log('CICLOS********'); // SE USASN PARA RECORRER ARRAYLIST
console.log('FOR**********');

for(let index=0;index<numeros.length;index++){
    const mod = numeros[index]%2;
    if(mod==0){
        console.log(numeros[index], 'par');
    }else{
        console.log(numeros[index],'impar');
    }
}
console.log('FOR IN**********'); //recorre todos los eleentos existentes en el array, captura la posición
for (let index in numeros){
    const mod = numeros[index]%2;
    if(mod==0){
        console.log(numeros[index], 'par');
    }else{
        console.log(numeros[index],'impar');
    }

}
console.log('FOR of**********'); //captuta los valores que estan en cada posicion
for (let valor of numeros){
    const mod = valor%2;
    if(mod==0){
        console.log(valor, 'par');
    }else{
        console.log(valor,'impar');
    }
}









