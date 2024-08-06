//////////////////////////////
////  Condiciones lógicas  ///
//////////////////////////////

// Lenguaje natural:
// "Si edad es menor que 18, entonces es menor"
// "de lo contrario, es mayor."
if (edad < 18) {
  return "Es menor";
} else {
  return "Es mayor";
}

// Lenguaje natural:
// "Si edad es mayor a 18 y sexo es igual a "Hombre"
// "entonces va al ejercito"
// "Si no, entonces va al colegio."
if (edad > 18 && sexo === "Hombre") {
  return "Va al ejercito";
} else {
  return "Va al colegio";
}

// Lenguaje natural:
// "Si edad es igual o mayor a 18 y no está enfermo"
// "entonces va a trabajar"
// "Si no, se queda en casa."
if (edad >= 18 && !enfermo) {
  return "Va a trabajar";
} else {
  return "Se queda en casa";
}
