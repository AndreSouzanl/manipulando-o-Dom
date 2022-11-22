
const container = document.getElementById('container');
const logoHTML = document.createElement('img');
const title = document.createElement('h1');



logoHTML.src ='./html.png';
logoHTML.width='400'

title.innerHTML= 'Imagem do html 5';

container.appendChild(title);
container.appendChild(logoHTML);

container.removeChild(title);
