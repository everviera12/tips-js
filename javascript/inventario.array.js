let inventario = [
  { nombre: "manzana", cantidad: 10, precio: 5 },
  { nombre: "banana", cantidad: 20, precio: 3 },
  { nombre: "naranja", cantidad: 15, precio: 4 },
];

const inventarioJson = JSON.stringify(inventario, null, 2); 
console.log(inventarioJson);

const agregarProducto = (nombre, cantidad, precio) => {
  inventario.push({ nombre, cantidad, precio });
  const nuevoProducto = JSON.stringify(inventario, null, 2);
  console.log(nuevoProducto);
};

const eliminarProducto = (nombre) => {
  inventario = inventario.filter(producto => producto.nombre !== nombre);
  // console.log(`Producto ${nombre} eliminado del inventario.`);
};


// eliminarProducto("banana");
agregarProducto("pera", 11, 13.57);
