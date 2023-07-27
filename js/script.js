document.getElementById("colorFondo").innerHTML = "Blanco"
document.getElementById("color").style.color = "Black";

function cambiarColor() {
    var colores = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white"];
    var nombresColores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosa", "marrón", "negro", "blanco"];
    var indice = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[indice];
    document.getElementById("colorFondo").innerHTML = nombresColores[indice];
    document.getElementById("color").style.color = "white";
    if (colores[indice] == "yellow" || colores[indice] == "white" || colores[indice] == "pink" || colores[indice] == "brown") {
        document.getElementById("color").style.color = "black";
    }
}
