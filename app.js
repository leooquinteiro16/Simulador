let usuario = prompt('Ingrese su usuario')
let contraseña = prompt('Ingrese su contraseña')

while(contraseña !== '1234'){
    alert('Contraseña incorrecta, reintente nuevamente')
    contraseña = prompt('Ingrese su contraseña')
}

alert('Bienvenido ' + usuario)

function compra()  {
            let compraUsuario = prompt('Bienvenido a su BullDog indumentaria , digannos que categoria estaba buscando')

                if (compraUsuario == 'Camisetas'){
                alert ('El valor de cada camiseta es de $3.500')
                cantidadDeseada = prompt('¿Cuantas cantidades necesita?')
                calculoCompraFinal = cantidadDeseada * 3500 
                alert ('Su precio total es de ' + calculoCompraFinal)


                } else if (compraUsuario == 'Pantalones') {
                alert ('El valor de cada pantalon es de $4.000')
                cantidadDeseada = prompt('¿Cuantas cantidades necesita?')
                calculoCompraFinal = cantidadDeseada * 4000 
                alert ('Su precio total es de ' + calculoCompraFinal)

                } else if (compraUsuario == 'Zapatillas'){
                alert ('El valor de cada par de zapatillas es de $10.000')
                cantidadDeseada = prompt('¿Cuantas cantidades necesita?')
                calculoCompraFinal = cantidadDeseada * 10000 
                alert ('Su precio total es de ' + calculoCompraFinal)

                }  else if (compraUsuario == 'Camperas'){
                alert ('El valor de cada campera es de $6000')
                cantidadDeseada = prompt('¿Cuantas cantidades necesita?')
                calculoCompraFinal = cantidadDeseada * 6000 
                alert ('Su precio total es de ' + calculoCompraFinal)
                }  

                
                otraCompra = prompt('¿Desea realizar otra compra?')
                    if (otraCompra == 'si'){
                        compra()
                    }   else if (otraCompra === 'no'){
                        alert('Muchas gracias por visitarnos!')
                    }
        }
compra()        

    