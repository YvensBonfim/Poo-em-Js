import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados =modificador.capitalizar(ingredientes, 'nome')
let containerIngredientes= document.getElementById('container-ingredientes');
for(let ingredientes of ingredientesCapitalizados){
let textoHtml = `<div class="Ingredientes">
                   <img src="img/${ingredientes.img}">
                   <p class="nome-ingrediente">${ingredientes.nome}</p>
                </div>
`;
containerIngredientes.innerHTML+= textoHtml;
}





/**
   <div class="Ingrediente">
                <img src="img/agriao.png" alt="">
                <p class="nome-ingrediente">Agrião</p>
            </div>
 */