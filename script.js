
function addToCart() {
let total = 0
let producto
    do {
        producto = parseInt(prompt("Ingrese el numero correspondiente a la opcion deseada \n1 oversize tee 2300, anadir al carrito \n2 hoodie 2900, anadir al carrito \n3 classic shorts 2100, anadir al carrito \n4 para ver total \n5 marque 0 para finalizar"))
        if (producto === 1){alert("producto anadido"); total += 2300} 
        else if (producto === 2){alert("producto anadido"); total += 2900 }
        else if (producto === 3){alert("producto anadido"); total += 2100 }
        else if (producto === 4){alert("el total es $" + total)}
        else if (producto == 0){alert("Gracias por visitarnos")}
        else {alert("Por favor, ingrese una opcion valida(1,2,3,4,0)")}

        
        
    } while (producto !== 0);
    }

    addToCart()




