import { crearCard } from "./Card.js"
import { pizzas } from "./DB.js";

export function consultarDB(id){
    const LSPizzas = localStorage.getItem('pizzas')
    const JSONPizzas = JSON.parse(LSPizzas)

    const   PizzaByID = JSONPizzas.find(pizza => pizza.id == id)

    if(!PizzaByID){
        error();
      
    }
    else{
        crearCard(PizzaByID);
    }
}


function error(){
    limpiarHTML()
    const error = document.createElement('div2')
    card.appendChild(error)
    let formulario= document.getElementById('#formulario')

    if(formulario<pizzas.length){
    const MsgError = document.createElement('h2')
    MsgError.innerHTML = "Pizza no encontrada"
    error.appendChild(MsgError)
    }
    


   


}
function limpiarHTML(){
    while (card.firstChild) {
        card.removeChild(card.firstChild)
    }
}