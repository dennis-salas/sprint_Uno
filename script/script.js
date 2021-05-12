const montoProducto = 820000;
var cantidad = 0;
var descuento = 0;

function Calcular(){
    cantidad = Number(document.getElementById("cantidad").value);
    compra = montoProducto * cantidad;

    if (compra>= 1640000 && compra<=3280000){
        descuento = compra * 0.15;
        total = compra - descuento;
        
        document.getElementById("valorcompra").value = compra;
        document.getElementById("valordescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("text").innerHTML = "Su descuento es de 15%"
    
    } 
    else if (compra>3280000 && compra<=6560000){
        descuento = compra * 0.25;
        total = compra - descuento;

        document.getElementById("valorcompra").value = compra;
        document.getElementById("valordescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("text").innerHTML = "Su descuento es de 25%"
    } 
    else if  (compra>6560000 && compra<=9840000){
        descuento = compra * 0.35;
        total = compra - descuento;
    
        document.getElementById("valorcompra").value = compra;
        document.getElementById("valordescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("text").innerHTML = "Su descuento es de 35%"
    }
    else {
        total = montoProducto * cantidad;
        document.getElementById("valorcompra").value = total;
        document.getElementById("valordescuento").value = 0;
        document.getElementById("total").value = total;
        document.getElementById("text").innerHTML = "No hay descuento para esta compra"
    }   
}