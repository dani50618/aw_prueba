/*Aqui tenemos definidas todas las variables globales*/
var nombre;
var producto = 0.00;
var cantidad;
var numero = 0.00;
var total = 0.00;
var texto = 0.00;

/*Esta es la primera funcion, sirve para asignar los valores de cada producto*/
function boton(x, j) {
	nombre = x;
	producto = j;
}

/*Esta funcion sirve para asignar el valor que introducimos en el teclado numerico de la web dentro de una variable*/
function boton2(p) {
	numero = document.getElementById("dp1");
	if (numero.innerHTML>0) {
		numero.innerHTML += p;
	} else {
		numero.innerHTML = p;
	}
	texto = numero.innerHTML;
}

/*Esta funcion sirve para pasar el numero introducido en el teclado a negativo para restar un producto al ticket*/
function resta() {
	numero.innerHTML = "-" + numero.innerHTML;
	texto = numero.innerHTML;
}

/*Esta funcion sirve para introducir el resultado final de los productos en el ticket y calcular el total de todos los productos puestos, tambien reinicia el resultado del teclado a 0*/
function operacion() {
	if (producto==0) {
    } else {
	var precioproducto;
	precioproductos = document.getElementById("compra");
	precioproductos.innerHTML = precioproductos.innerHTML + "<br>" + texto + "x " + "&nbsp" + nombre + "&nbsp" + producto + "€ " + "&nbsp" + producto * texto + "€";
	var preciototal;
	preciototal = document.getElementById("precio");
	preciototal.innerHTML = total + producto * texto + "€";
	total = total + producto * texto;
	numero.innerHTML = 0.00;
	producto = 0.00;
	}
}

/*Holiiiii que tal estan ustedes*/
