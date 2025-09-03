//VARIABLES-------------
const form = document.forms['multiplicarForm'];
const result = document.getElementById('resultado');

localStorage.setItem('nameApp','Ejemplo de almacenamiento');
console.log(localStorage.getItem('nameApp'));
sessionStorage.setItem('sesion1','prueba');
console.log(localStorage.key(0));
console.log(JSON.parse('{"nombre:""Pepe"}'));

//METODOS---------------
const multiplicar =(factorA,factorB)=>{
    return factorA*factorB;
};

const showResult =(num)=> {
    result.textContent =`El resultado es:${num}`
}

const saveLog =(datos)=> {
    const log = {
        fecha: new Date(),
        Operacion: datos,
        };
        const num = localStorage.length;
        const key = `operación_ ${num}`;
        localStorage.setItem(key,JSON.stringify(log));

    }

//EVENTOS---------------
form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const factorA = form ['factor1'].value;
    const factorB = form ['factor2'].value;
    const res= multiplicar(Number(factorA),Number(factorB));
    showResult(res);
    const datos={
        factorA,factorB,resultado:res
    };
    saveLog(datos);
    form.reset();

});