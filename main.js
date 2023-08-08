let button = document.getElementById('Verificar Acesso')

button.addEventListener('click',function(){

let min = parseInt(document.getElementById( 'min') .value);


let resultado =Math.floor(Math.random() *  (max -min + 1) + min);

if (isNaN(resultado)){
    resultado = "Insira um número";
}
document.querySelector('#resultado') .textContent =resultado; 

})