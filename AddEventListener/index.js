
const form = document.getElementById('form');

form.addEventListener('submit', enviar);

function enviar(e){

    e.preventDefault();

    const idade = document.getElementById('age');

    if (idade.value < 18) {

        alert('Menor de idade !');
        
    }else{
        alert('Maior de idade !');
    }


    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', ()=>{
        
        alert('Diga Olá');
    });
}