//////////////////////////////
////  Operadores lógicos  ////
//////////////////////////////

// AND (y) &&
// Solo si ambos son verdaderos.
true && true; // true ✅
false && false; // false ❌
true && false; // false ❌
false && true; // false ❌

// OR (o) ||
// Solo si al menos uno es verdadero.
true || true; // true ✅
false || false; // false ❌
true || false; // true ✅
false || true; // true ✅

// NOT (n) !
// Inverte el valor booleano.
!true; // false ❌
!false; // true ✅

// XOR (x) ^
// Solo si uno es verdadero, no ambos.
true ^ true; // false ❌
false ^ false; // false ❌
true ^ false; // true ✅
false ^ true; // true ✅
