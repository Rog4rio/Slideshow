// 'use strict';
// //um objeto que poderia vim de uma API ou de outro local e vai ser um array com os objetos literais.
// const images = [
//     {'id': '1', 'url': './img/chrono.jpg'},
//     {'id': '2', 'url': './img/inuyasha.jpg'},
//     {'id': '3', 'url': './img/tenchi.jpg'},
//     {'id': '4', 'url': './img/tenjhotenge.jpg'},
//     {'id': '5', 'url': './img/yuyuhakusho.jpg'},
//     {'id': '6', 'url': './img/ippo.png'},
// ]

// //Declarar o container.
// const containerItems = document.querySelector('.container-items');


// //Criar o carregamento de imagens.
// const loadImages = (images, container) => {
//     images.forEach( image => { //image faz referência a uma única imagem do meu container.
//         //O += para concatenar as imagens para que não fique somente a última.
//         container.innerHTML += `
//         <div class = 'item'>
//             <img src= '${image.url}'>
//         </div>
//         `;//Inseri uma classe na div adicionada ao html, e adicionar uma imagem que aponta para o json. //Pegar o container e adicionar ao container dele ao HTML dele. O template string pode-se usar variável.
//     }) //pegar as imagens que eu recebi e vai dá um foreach para varrer todas elas. Ou seja, realizar uma ação com ela.
// }

// //passar as imagens. Receber a imagem e o container onde estão as imagens.
// loadImages(images, containerItems);

// let items = document.querySelectorAll('.item'); //pegar todos os itens do slide.

// const previous = () => {
//     containerItems.appendChild(items[0]); //adiciona items sempre no final
//     items = document.querySelectorAll('.item'); //Pegar a lista de novo e ler ela de novo.
// }

// const next = () => {
//     const lastItem = items[items.length - 1];//Pegar o último indíce e menos 1, porque o length sempre trás a quantidade, e como os indíces começam do zero a quantidade é sempre menos 1.
//     containerItems.insertBefore(lastItem, items[0]); //Inserir antes. Pegar o último item e colocar ele antes do primeiro.
//     items = document.querySelectorAll('.item');
// }   

// document.querySelector('#previous').addEventListener('click', previous);
// document.querySelector('#next').addEventListener('click', next);


'use strict'

const images = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/ippo.png'},
    {'id': '4', 'url': './img/tenchi.jpg'},
    {'id': '5', 'url': './img/tenjhotenge.jpg'},
    {'id': '6', 'url': './img/yuyuhakusho.jpg'},
]

const containerItems = document.querySelector('.container-items');


const loadImages = (images,container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class= 'item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages(images,containerItems);


let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem,items[0]);
    items = document.querySelectorAll('.item');
}





document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);



