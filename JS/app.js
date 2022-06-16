const formulario = document.querySelector('#formulario')
const IDPizza= document.querySelector('#idPizza')

window.addEventListener ("load",()=>{
    localStorage.setItem("pizzas", JSON.stringify(pizzas))
})


formulario.addEventListener("submit", (e) => {
    e.preventDefault()


    const PizzaLS = JSON.parse(localStorage.getItem("pizzas"))



    const PizzasId = PizzaLS.find((pizza) => pizza.id == IDPizza.value);


    if (IDPizza.value == "") {
        alert("Debes ingresar un ID");
        return;
      }
    console.log(IDPizza);


    if (PizzasId == undefined) {
        alert("No existe la pizza con el ID ingresado");
        return;
      }

      console.log(PizzasId);
})