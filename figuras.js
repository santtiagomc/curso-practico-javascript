//Codigo del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado + "cm^2"); */
function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("El area del triangulo es: " + areaTriangulo + "cm^2"); */
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2 ;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//Pi
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2"); */

function diametroCirculo (radio) {
    return radio * 2;
}

const PI= Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();