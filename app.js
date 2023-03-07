const productos = [
    {nombre: "Camisetas", precio: 3500 },
    {nombre: "Pantalones", precio: 4000 },
    {nombre: "Zapatillas", precio: 1000 },
    {nombre: "Camperas", precio: 6000 },
];

let carrito = []

let usuario = prompt('Ingrese su usuario')
let contraseña = prompt('Ingrese su contraseña')

while(contraseña !== '1234'){
    alert('Contraseña incorrecta, reintente nuevamente')
    contraseña = (prompt('Ingrese su contraseña'))
}

alert('Bienvenido ' + usuario)

let seleccion = prompt('Bienvenido a BullDog Indumentaria ¿Desea comprar algun producto?')

while(seleccion != 'si' && seleccion != "no"){
    alert('Porfavor ingresa si o no')
    seleccion = prompt('Bienvenido a BullDog Indumentaria ¿Desea comprar algun producto?')
}

if(seleccion == "si"){
    alert("Bienvenido a BullDog Indumentaria, a continuacion podra ver nuestros productos con su precio")
            let todosLosProductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");
            alert(todosLosProductos.join(" * "))
}   else if (seleccion == "no"){
    alert('Gracias por visitarnos')
}            
                
while(seleccion != "no"){

                let producto = prompt('Agrega un producto a tu carrito')
                let precio = 0

if(producto == "Camisetas" || producto == "Pantalones" || producto == "Zapatillas" || producto == "Camperas"){
            switch (producto) {
                case "Camisetas":
                    precio = 3500;
                    break;
                case "Pantalones":
                    precio = 4000;
                    break;
                case "Zapatillas":
                    precio = 1000;
                    break;   
                case "Camperas":
                    precio = 6000;
                    break;    
                    default:
                    break;
            }

            let unidades = parseInt(prompt('Indique la cantidad del producto seleccionado'))

            carrito.push({producto, unidades, precio})
            console.log(carrito)
            } else {
                alert('No contamos con ese producto')
            }


            seleccion = prompt('¿Desea realizar otra compra?')

            while(seleccion === 'no'){
              alert('Muchas gracias por visitarnos')
              carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
                total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
              })
              break;
}
}