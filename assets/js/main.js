function notasFinales(){

    let nombre  = prompt("Ingrese nombre estudiante:");
    let carrera = prompt("Ingrese nombre carrera:");
    
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("carrera").innerHTML = carrera;

    let notas = {
      "[HTML]": [],
      "[CSS]": [],
      "[JavaScript]": []
    };

    for (let ramo in notas) {
        for (let i = 1; i <= 3; i++) {
            let nota;
            do {
                nota = prompt("Ingrese nota"+ " " + i + " " + ramo + " :");
            }while (isNaN(parseFloat(nota)) || nota.trim() === "");

            notas[ramo].push(parseFloat(nota));
        }
    }

    let tablaBody = document.getElementById("notas");

    for (let ramo in notas) {
      let fila = "<tr>";
      fila += "<th scope='row'>" + ramo + "</th>";

      for (let i = 0; i < notas[ramo].length; i++) {
        fila += "<td>" + notas[ramo][i] + "</td>";
      }

      let promedio = calcularPromedio(notas[ramo]);
      fila += "<td>" + promedio.toFixed(1) + "</td>";
      fila += "</tr>";

      tablaBody.innerHTML += fila;
    }

    function calcularPromedio(notasArray) {
      let suma = 0;
      for (let i = 0; i < notasArray.length; i++) {
        suma += notasArray[i];
      }
      return suma / notasArray.length;
    }

  };