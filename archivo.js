alert("Hola bienvenido, la dinamica sera la siguiente por favor preste mucha atencion. \n opción 1:\n El usuario le dara un numero al programa y este lo sumara con un numero alvergado en la variable i. \n opcion 2: \n El usuario le dara al programa un numero el cual repetira le mensaje 'hola como estas', cada vez que inserte un caracter diferente a un numero este terminara su ciclo. \n opcion 3: \n El usuario tendra un menú para saber a que productos podra agregarle un descuento." );

const opc = prompt("ingrese una opción por favor");

switch (opc){
    
    case "1":
        let num = parseInt(prompt("Ingrese un numero por favor"));
        for(let i=0; i<=10; i++ ){
            let resul = num + i;
            console.log(resul); 
        }
        break;
    
    case "2":
        let numero = 0;
        do{
            numero= (prompt("Ingresar un numero por favor"));
            console.log("hola como estas?");
        }
        while (parseInt(numero))
        break;

        default:
        alert("No hay nada para imprimir");
        break;
    
    case "3":
        
        let minopc = prompt("ingrese uno de los tres productos a cualquiera se les desea conocer a como esta su precio con el descuento \n naranjas 10% \n bananos 20% \n peras 30%");
        
        switch (minopc){
        
            case "naranjas":
                precio = parseInt(prompt("Ingrese su costo por unidad"));

                resultado = precio * 10/100;
                
                resultadofinal = precio -resultado;

                alert("se te hara el descuento de " +resultado);

                alert("Costo total por unidad es " + resultadofinal);
            break;

            
            case "bananos":
                precio = parseFloat(prompt("Ingrese su costo por unidad"));

                resultado = precio * 20/100;

                resultadofinal = precio -resultado;

                alert("se te hara el descuento de " +resultado);

                alert("Costo total por unidad es " + resultadofinal);
            break;
            
            
            case "peras":
                precio = parseFloat(prompt("Ingrese su costo por unidad"));

                resultado = precio * 30/100;

                resultadofinal = precio -resultado;

                alert("se te hara el descuento de " +resultado);

                alert("Costo total por unidad es " + resultadofinal);
            break;
        }    
    break;
}
// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));
