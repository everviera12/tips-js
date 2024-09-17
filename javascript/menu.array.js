// declaramos los items de nuestro menu en un menu
let menu = ["pizza", "tacos", "popo", "pasta"];
console.log(menu.join(", "));

// removemos la popo
let index = menu.indexOf("popo");

if (index !== -1) {
  let removedItem = menu.splice(index, 1);
  console.log(`${removedItem[0]} eliminada`);
}

// mostramos el menu nuevo
console.log(menu.join(", "));

// agregamos un nuevo item
menu.push("hamburguesa");
console.log(menu.join(", "));
