

function enviar(){
    const idade = document.getElementById('age');

    if (idade.value < 18) {

        alert('Menor de idade !');
        
    }else{
        alert('Maior de idade !');
    }
}