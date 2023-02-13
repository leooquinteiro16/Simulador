let usuario = prompt('Ingrese su usuario')
let contraseña = prompt('Ingrese su contraseña')

while(contraseña !== '1234'){
    alert('Contraseña incorrecta, reintente nuevamente')
    contraseña = prompt('Ingrese su contraseña')
}

alert('Bienvenido ' + usuario)

function calcular()  {
            let operacionPedida = prompt('Bienvenido a su calculadora, digannos que operacion quiere realizar')

                if (operacionPedida == '*')
                {
                    alert('Eligio Multiplicacion')
                    primerNumero = Number(prompt('Indique su numero'))
                    segundoNumero = Number(prompt('Indique su numero'))
                    producto = primerNumero * segundoNumero
                    alert('El resultado es ' + producto)

                } else if (operacionPedida == '/') {
                    alert('Eligio Division')
                    primerNumero = Number(prompt('Indique su numero'))
                    segundoNumero = Number(prompt('Indique su numero'))
                    producto = primerNumero / segundoNumero
                    alert('El resultado es ' + producto)
                

                } else if (operacionPedida == '+'){
                
                    alert('Eligio Suma')
                    primerNumero = Number(prompt('Indique su 1er numero'))
                    segundoNumero = Number(prompt('Indique su 2do numero'))
                    primerNumero + segundoNumero
                    producto = primerNumero + segundoNumero
                    alert('El resultado es ' + producto)

                }  else if (operacionPedida == '-'){
                    alert('Eligio Resta')
                    primerNumero = Number(prompt('Indique su 1er numero'))
                    segundoNumero = Number(prompt('Indique su 2do numero'))
                    producto = primerNumero - segundoNumero
                    alert('El resultado es ' + producto)
                }  
                
                otraOperacion = prompt('¿Desea realizar otra operacion?')
                    if (otraOperacion == 'si'){
                        calcular()
                    }   else if (otraOperacion === 'no'){
                        alert('Muchas gracias por usar nuestra calculadora')
                    }
        }

    
calcular()