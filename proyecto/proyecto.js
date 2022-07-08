let dia = prompt("Primera fecha, digite el día de nacimiento (en números)")
let mes = prompt("Digite el mes de nacimiento (en palabras ej: septiembre)")


if (dia <= 20 && mes== "enero" || dia >= 22 && mes == "diciembre" ){
    alert("Su signo es Capricornio")
}
else if (dia >= 21 && mes == "enero" || dia <= 19 && mes == "febrero") {
    alert("Su signo es Acuario")
}
else if(dia >= 20 && mes == "febrero" || dia <= 20 && mes == "marzo"){
    alert("Su signo es Piscis")
}
else if(dia >= 21 && mes == "marzo" || dia <= 20 && mes == "abril"){
    alert("Su signo es Aries")
}
else if(dia >= 21 && mes == "abril" || dia <= 21 && mes == "mayo"){
    alert("Su signo es Tauro")
}
else if(dia >= 22 && mes == "mayo" || dia <= 21 && mes == "junio"){
    alert("Su signo es Géminis")
}
else if(dia >= 22 && mes == " junio" || dia <= 22 && mes == "julio"){
    alert("Su signo es Cáncer")
}
else if(dia >= 23 && mes == "julio" || dia <= 22 && mes == "agosto"){
    alert("Su signo es Leo")
}
else if(dia >= 23 && mes == "agosto" || dia <= 22 && mes == "septiembre"){
    alert("Su signo es Virgo")
}
else if(dia >= 23 && mes == "septiembre" || dia <= 22 && mes == "octubre"){
    alert("Su signo es Libra")
}
else if(dia >= 23 && mes == "octubre" || dia <= 22 && mes == "noviembre"){
    alert("Su signo es Escorpio")
}
else if(dia >= 23 && mes == "noviembre" || dia <= 21 && mes == "diciembre"){
    alert("Su signo es Sagitario")
} 
else {
    alert("No se ingresaron los valores correctos")
}


let segundodia = prompt("Segunda fecha, digite el día de nacimiento (en números)")
let segundomes = prompt("Digite el mes de nacimiento (en palabras ej: septiembre)")


if (segundodia <= 20 && segundomes== "enero" || segundodia >= 22 && segundomes == "diciembre" ){
    alert("Su signo es Capricornio")
}
else if (segundodia >= 21 && segundomes == "enero" || segundodia <= 19 && segundomes == "febrero") {
    alert("Su signo es Acuario")
}
else if(segundodia >= 20 && segundomes == "febrero" || segundodia <= 20 && segundomes == "marzo"){
    alert("Su signo es Piscis")
}
else if(segundodia >= 21 && segundomes == "marzo" || segundodia <= 20 && segundomes == "abril"){
    alert("Su signo es Aries")
}
else if(segundodia >= 21 && segundomes == "abril" || segundodia <= 21 && segundomes == "mayo"){
    alert("Su signo es Tauro")
}
else if(segundodia >= 22 && segundomes == "mayo" || segundodia <= 21 && segundomes == "junio"){
    alert("Su signo es Géminis")
}
else if(segundodia >= 22 && segundomes == " junio" || segundodia <= 22 && segundomes == "julio"){
    alert("Su signo es Cáncer")
}
else if(segundodia >= 23 && segundomes == "julio" || segundodia <= 22 && segundomes == "agosto"){
    alert("Su signo es Leo")
}
else if(segundodia >= 23 && segundomes == "agosto" || segundodia <= 22 && segundomes == "septiembre"){
    alert("Su signo es Virgo")
}
else if(segundodia >= 23 && segundomes == "septiembre" || segundodia <= 22 && segundomes == "octubre"){
    alert("Su signo es Libra")
}
else if(segundodia >= 23 && segundomes == "octubre" || segundodia <= 22 && segundomes == "noviembre"){
    alert("Su signo es Escorpio")
}
else if(segundodia >= 23 && segundomes == "noviembre" || segundodia <= 21 && segundomes == "diciembre"){
    alert("Su signo es Sagitario")
} 
else {
    alert("No se ingresaron los valores correctos")
}


let signoa = prompt("Para saber su compatibilidad, digite el primer signo")
let signob = prompt("Digite el segundo signo")

if(signoa == "geminis" && signob == "geminis" || signoa == "geminis" && signob == "Libra" || signoa == "geminis" && signob == "Leo" || signoa == "geminis" && signob == "Acuario" || signoa == "Géminis" && signob == "Aries"){
    document.write("Compatibles")
}
else if(signoa == "Géminis" && signob == "Piscis" || signoa == "Géminis" && signob == "Escorpio" || signoa == "Géminis" && signob == "Tauro" || signoa == "Géminis" && signob == "Cáncer"){
    document.write("No Compatibles")
}

 



