///////////////////////////////
// Operadores de comparacion //
///////////////////////////////

// Igualdad estricta ===
// Si ambos son iguales
1 === 1; // true ✅
1 === 2; // false ❌
"hola" === "hola"; // true ✅
"hola" === "chau"; // false ❌
1 === true; // false ❌

// Igualdad parcial ==
// Si ambos son equivalentes
1 == 1; // true ✅
1 == 2; // false ❌
"hola" == "hola"; // true ✅
"hola" == "chau"; // false ❌
1 == true; // true ✅
0 == false; // true ✅
[] == false; // true ✅

// Diferencia !==
// Si ambos son diferentes
1 !== 1; // false ❌
1 !== 2; // true ✅
"hola" !== "hola"; // false ❌
"hola" !== "chau"; // true ✅
1 !== true; // true ✅
0 !== false; // true ✅
