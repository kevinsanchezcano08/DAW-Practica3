pel = 0;
function selc1(){
    pel = 1;
    document.getElementById("btn1").innerHTML += " <button onclick='comprar();'>Comprar tickets</button>";
    document.getElementById("selc1").disabled= true;
    document.getElementById("selc2").disabled= true;
    document.getElementById("selc3").disabled= true;

}
function selc2(){
    pel = 2;
    document.getElementById("btn2").innerHTML += " <button onclick='comprar();'>Comprar tickets</button>";
    document.getElementById("selc1").disabled= true;
    document.getElementById("selc2").disabled= true;
    document.getElementById("selc3").disabled= true;
}
function selc3(){
    pel = 3;
    document.getElementById("btn3").innerHTML += " <button onclick='comprar();'>Comprar tickets</button>";
    document.getElementById("selc1").disabled= true;
    document.getElementById("selc2").disabled= true;
    document.getElementById("selc3").disabled= true;
}
function comprar(){
    document.getElementById("compra").innerHTML = "<h1>Compra de Tickets</h1>"
    console.log(pel)
    switch (pel) {
        case 1:
            nombreP = "Venom"
            horario1 = "10:00 AM"
            horario2 = "8:00 AM"
            document.getElementById("detalles").innerHTML = "<p>Nombre de la película: " + nombreP + "</p>"
            document.getElementById("detalles").innerHTML += "<p>Horarios:  <input type='radio' id='h1' name='horario'> <label for='h1'>"+ horario1 +"</label> <input type='radio' id='h2' name='horario'> <label for='h2'>"+ horario2 +"</label></p>"
            break;
        case 2:
                nombreP = "Black Widow"
                horario1 = "9:00 AM"
                horario2 = "11:00 AM"
                document.getElementById("detalles").innerHTML = "<p>Nombre de la película: " + nombreP + "</p>"
                document.getElementById("detalles").innerHTML += "<p>Horarios:  <input type='radio' id='h1' name='horario'> <label for='h1'>"+ horario1 +"</label> <input type='radio' id='h2' name='horario'> <label for='h2'>"+ horario2 +"</label></p>"
            break;
        case 3:
            nombreP = "Luca"
            horario1 = "3:00 PM"
            horario2 = "5:00 PM"
            document.getElementById("detalles").innerHTML = "<p>Nombre de la película: " + nombreP + "</p>"
            document.getElementById("detalles").innerHTML += "<p>Horarios:  <input type='radio' id='h1' name='horario'> <label for='h1'>"+ horario1 +"</label> <input type='radio' id='h2' name='horario'> <label for='h2'>"+ horario2 +"</label></p>"
            break;
        default:
            break;
    }
}